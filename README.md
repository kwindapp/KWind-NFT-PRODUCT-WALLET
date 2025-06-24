# 🪙 NFT Wallet UI

A reusable UI kit for NFT wallet features using **Vue 3 + Quasar**.  
Includes wallet generation, token management, and NFT gallery components.

---

## 📦 Project Info

- **Name:** nft-wallet-ui
- **Version:** 0.0.1
- **Author:** Zeeshan Riaz <zshnriaz@gmail.com>
- **Frameworks:** Vue 3, Quasar CLI (Vite)
- **Blockchain Libraries:** Ethers.js, BIP39
- **License:** MIT

---

## 🚀 Features

✅ Wallet Initialization  
✅ 12-word Seed Phrase Generation  
✅ Wallet Address Display  
✅ Quasar UI Components  
✅ ERC-721 / ERC-1155 ready structure  
✅ Designed for future integration into full NFT apps

---

## 🛠 Folder Structure

```
src/
├── assets/          # Static assets
├── boot/            # Quasar boot files
├── components/      # Reusable Vue components
├── composables/     # Composable logic (e.g., useWallet.js)
├── css/             # Custom styles
├── layouts/         # Page layouts (e.g., MainLayout.vue)
├── pages/           # Main views (e.g., WalletPage.vue)
├── router/          # Vue Router config
├── stores/          # Pinia store modules
├── App.vue          # Root component
├── main.js          # App entry point
```

---

## 🔧 Tech Stack

- [Vue 3](https://vuejs.org/)
- [Quasar Framework](https://quasar.dev/)
- [Vite](https://vitejs.dev/)
- [Pinia](https://pinia.vuejs.org/)
- [Ethers.js v6](https://docs.ethers.org/v6/)
- [bip39](https://github.com/bitcoinjs/bip39)

---

## 📦 Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

> Requires Node.js **v18+** and npm **v6.13.4+**

---

## 🔨 Build for Production

```bash
npm run build
```

---

## 🧪 Code Quality

```bash
# Lint code using ESLint
npm run lint

# Format files using Prettier
npm run format
```

---

## 🌐 Local Preview

Once running, open:

```
http://localhost:9000/#/
```

You’ll see a working wallet setup screen with:

- Seed phrase generation
- Wallet address display
- Future support for NFTs and token transactions

---

## 📄 License

MIT License © 2025 [Zeeshan Riaz](mailto:zshnriaz@gmail.com)
