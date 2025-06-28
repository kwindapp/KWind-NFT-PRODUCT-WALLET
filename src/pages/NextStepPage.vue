<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useNFTs } from 'src/composables/useNFTs';

const route = useRoute();
const nftList = ref([]);
const loading = ref(false);

const { getNFTsForAddress } = useNFTs();

const walletAddress = ref(route.query.address || '');

const loadNFTs = async () => {
  if (!walletAddress.value) return;
  loading.value = true;
  nftList.value = await getNFTsForAddress(walletAddress.value);
  loading.value = false;
};

onMounted(() => {
  loadNFTs();
});
</script>

<template>
  <q-page class="q-pa-md column items-center">
    <h2>Wallet Address</h2>
    <div><strong>{{ walletAddress }}</strong></div>

    <q-btn label="Refresh NFTs" color="primary" @click="loadNFTs" :loading="loading" class="q-my-md" />

    <div v-if="loading">Loading NFTs...</div>
    <div v-else-if="nftList.length === 0">No NFTs found for this address.</div>

    <div v-else class="nft-list" style="max-width: 600px; width: 100%;">
      <q-card v-for="nft in nftList" :key="nft.tokenId" class="q-pa-sm q-mb-md">
        <q-img :src="nft.media[0]?.gateway" :alt="nft.title" style="max-height: 200px;" contain />
        <div class="q-mt-sm"><strong>{{ nft.title }}</strong></div>
        <div class="text-subtitle2">Token ID: {{ nft.tokenId }}</div>
      </q-card>
    </div>
  </q-page>
</template>
