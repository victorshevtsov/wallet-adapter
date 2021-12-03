import { WalletError } from '@safecoin/wallet-adapter-base';

export class WalletNotSelectedError extends WalletError {
    name = 'WalletNotSelectedError';
}
