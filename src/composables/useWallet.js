// src/composables/useWallet.js
import { HDNodeWallet, Mnemonic } from 'ethers';
import * as bip39 from 'bip39';

export function useWallet() {
    const generateWallet = async () => {
        const mnemonicPhrase = bip39.generateMnemonic();
        const mnemonic = Mnemonic.fromPhrase(mnemonicPhrase);
        const wallet = HDNodeWallet.fromMnemonic(mnemonic);

        return {
            address: wallet.address,
            mnemonic: mnemonicPhrase,
            privateKey: wallet.privateKey
        };
    };

    return { generateWallet };
}
