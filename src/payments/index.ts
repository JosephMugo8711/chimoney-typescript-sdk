import { Base } from "../base";
import { 
    ChimoneyPayout,
    MobileMoneyPayout,
    AirtimePayout,
    BankPayout,
    GiftCardPayout,
    XRPLPayout 
} from "./types";

// Abstract payment to a constant
const resource = 'payments'; // Set the appropriate resource path

export class Payments extends Base {
    // Method for Chimoney Payout
    async createChimoneyPayout(payoutData: ChimoneyPayout): Promise<any> {
        return await this.paymentPost(`${resource}/chimoney-payout`, payoutData);
    }

    // Renamed method for posting payouts
    paymentPost(arg0: string, payoutData: ChimoneyPayout): any {
        // Implement the method logic here or delegate it to the Base class if needed.
        return this.apiRequest(arg0, { method: 'POST', body: JSON.stringify(payoutData) });
    }

    // Method for Mobile Money Payout
    async createMobileMoneyPayout(payoutData: MobileMoneyPayout): Promise<any> {
        return await this.paymentPost(`${resource}/mobile-money-payout`, payoutData);
    }

    // Method for Airtime Payout
    async createAirtimePayout(payoutData: AirtimePayout): Promise<any> {
        return await this.paymentPost(`${resource}/airtime-payout`, payoutData);
    }

    // Method for Bank Payout
    async createBankPayout(payoutData: BankPayout): Promise<any> {
        return await this.paymentPost(`${resource}/bank-payout`, payoutData);
    }

    // Method for Gift Card Payout
    async createGiftCardPayout(payoutData: GiftCardPayout): Promise<any> {
        return await this.paymentPost(`${resource}/giftcard-payout`, payoutData);
    }

    // Method for XRPL Payout
    async createXRPLPayout(payoutData: XRPLPayout): Promise<any> {
        return await this.paymentPost(`${resource}/xrpl-payout`, payoutData);
    }
}
