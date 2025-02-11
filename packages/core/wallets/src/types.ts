import { MessageSignerWalletAdapter, SignerWalletAdapter, WalletAdapter } from '@safecoin/wallet-adapter-base';

export enum WalletName {
    BitKeep = 'BitKeep',
    Bitpie = 'Bitpie',
    Blocto = 'Blocto',
    Clover = 'Clover',
    Coin98 = 'Coin98',
    Coinhub = 'Coinhub',
    Ledger = 'Ledger',
    MathWallet = 'MathWallet',
    Phantom = 'Phantom',
    Safecoin = 'Safecoin',
    SafePal = 'SafePal',
    Slope = 'Slope',
    Solflare = 'Solflare',
    SolflareWeb = 'Solflare (Web)',
    Sollet = 'Sollet',
    SolletExtension = 'Sollet (Extension)',
    Solong = 'Solong',
    TokenPocket = 'TokenPocket',
    Torus = 'Torus',
    // WalletConnect = 'WalletConnect', // not published yet
}

export interface Wallet {
    name: WalletName;
    url: string;
    icon: string;
    adapter: () => WalletAdapter | SignerWalletAdapter | MessageSignerWalletAdapter;
}
