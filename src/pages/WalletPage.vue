<template>
    <q-page class="q-pa-md column items-center justify-center">
        <q-btn label="Generate Wallet" color="primary" @click="createWallet" />

        <q-card v-if="wallet" class="q-mt-lg q-pa-md" style="width: 100%; max-width: 600px;">
            <q-card-section>
                <div><strong>Address:</strong> {{ wallet.address }}</div>
                <div class="q-mt-sm"><strong>Seed Phrase:</strong> {{ wallet.mnemonic }}</div>
            </q-card-section>
        </q-card>
    </q-page>
</template>

<script setup>
import { ref } from 'vue';
import { useWallet } from 'src/composables/useWallet';

const wallet = ref(null);
const { generateWallet } = useWallet();

const createWallet = async () => {
    wallet.value = await generateWallet();
};
</script>
