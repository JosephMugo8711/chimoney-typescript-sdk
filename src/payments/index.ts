import { Base } from "src/base";
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
        return await this.post(`${resource}/chimoney-payout`, payoutData);
    }
    post(arg0: string, payoutData: ChimoneyPayout): any {
        throw new Error("Method not implemented.");
    }

    // Method for Mobile Money Payout
    async createMobileMoneyPayout(payoutData: MobileMoneyPayout): Promise<any> {
        return await this.post(`${resource}/mobile-money-payout`, payoutData);
    }

    // Method for Airtime Payout
    async createAirtimePayout(payoutData: AirtimePayout): Promise<any> {
        return await this.post(`${resource}/airtime-payout`, payoutData);
    }

    // Method for Bank Payout
    async createBankPayout(payoutData: BankPayout): Promise<any> {
        return await this.post(`${resource}/bank-payout`, payoutData);
    }

    // Method for Gift Card Payout
    async createGiftCardPayout(payoutData: GiftCardPayout): Promise<any> {
        return await this.post(`${resource}/giftcard-payout`, payoutData);
    }

    // Method for XRPL Payout
    async createXRPLPayout(payoutData: XRPLPayout): Promise<any> {
        return await this.post(`${resource}/xrpl-payout`, payoutData);
    }
}
