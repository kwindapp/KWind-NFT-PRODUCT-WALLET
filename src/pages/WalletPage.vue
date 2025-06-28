<script setup>
import { ref, onMounted, watch } from 'vue';
import { useWallet } from 'src/composables/useWallet';
import { useNFTs } from 'src/composables/useNFTs';
import { useRouter } from 'vue-router';

const wallet = ref(null);
const nftList = ref([]);
const loadingNFTs = ref(false); // <-- loading state

const { generateWallet } = useWallet();
const { getNFTsForAddress } = useNFTs();

const router = useRouter();

const WALLET_STORAGE_KEY = 'my-nft-wallet';

const createWallet = async () => {
  wallet.value = await generateWallet();
  if (wallet.value?.address) {
    loadingNFTs.value = true;
    nftList.value = await getNFTsForAddress(wallet.value.address);
    loadingNFTs.value = false;
  }
};

const goNextStep = () => {
  if (wallet.value?.address) {
    router.push({ path: '/next-step-page', query: { address: wallet.value.address } });
  }
};

onMounted(() => {
  const savedWallet = localStorage.getItem(WALLET_STORAGE_KEY);
  if (savedWallet) {
    wallet.value = JSON.parse(savedWallet);
    if (wallet.value?.address) {
      loadingNFTs.value = true;
      getNFTsForAddress(wallet.value.address).then(nfts => {
        nftList.value = nfts;
        loadingNFTs.value = false;
      });
    }
  }
});

watch(wallet, (newWallet) => {
  if (newWallet) {
    localStorage.setItem(WALLET_STORAGE_KEY, JSON.stringify(newWallet));
  } else {
    localStorage.removeItem(WALLET_STORAGE_KEY);
  }
});
</script>

<template>
  <q-page class="q-pa-md column items-center justify-center">
    <q-btn label="Generate Wallet" color="primary" @click="createWallet" />

    <q-card v-if="wallet" class="q-mt-lg q-pa-md" style="width: 100%; max-width: 600px;">
      <q-card-section>
        <div><strong>Address:</strong> {{ wallet.address }}</div>
        <div class="q-mt-sm"><strong>Seed Phrase:</strong> {{ wallet.mnemonic }}</div>
      </q-card-section>
    </q-card>

    <!-- Show loading message -->
    <q-card v-if="loadingNFTs" class="q-mt-lg q-pa-md" style="width: 100%; max-width: 600px;">
      <q-card-section>
        Loading NFTs...
      </q-card-section>
    </q-card>

    <!-- Show NFTs if loaded and not empty -->
    <q-card v-else-if="nftList.length" class="q-mt-lg q-pa-md" style="width: 100%; max-width: 600px;">
      <q-card-section>
        <div class="text-h6 q-mb-md">NFTs</div>
        <div v-for="nft in nftList" :key="nft.tokenId" class="q-mb-md">
          <q-img :src="nft.media[0]?.gateway" :alt="nft.title" style="max-height: 200px;" />
          <div class="q-mt-sm"><strong>{{ nft.title }}</strong></div>
        </div>
      </q-card-section>
    </q-card>

    <!-- Show message if no NFTs found and not loading -->
    <q-card v-else class="q-mt-lg q-pa-md" style="width: 100%; max-width: 600px;">
      <q-card-section>
        No NFTs found for this wallet.
      </q-card-section>
    </q-card>

    <q-btn
      v-if="wallet"
      label="Next Step"
      color="secondary"
      class="q-mt-md"
      @click="goNextStep"
    />
  </q-page>
</template>
