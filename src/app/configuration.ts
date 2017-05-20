import { TaxConfig } from "./tax.service";
import { NIBands } from "./national-insurance.service";
import { WcipfItem } from "./wcipf.service";

export const NATIONAL_INSURANCE: NIBands = {
  primary: {
    rate: 12,
    start: 157,
    end: 866
  },
  upper: {
    rate: 2,
    start: 866
  }
}

export const CURRENT_TAX: TaxConfig = { 
    allowance: 11509,
    taperedAllowanceThreshold: 100000,
    bands: {
      basic: { start: 0, end: 33500, rate: 20 },
      higher: { start: 33500, end: 150000, rate: 40 },
      additional: { start: 150000, rate: 45 }
    }
}

export const PROPOSED_TAX: TaxConfig = { 
    allowance: 11509,
    taperedAllowanceThreshold: 100000,
    bands: {
      basic: { start: 0, end: 33500, rate: 20 },
      higher: { start: 33500, end: 80000, rate: 40 },
      additional: { start: 80000, end: 123000, rate: 45 },
      extra: { start: 123000, rate: 50 }
    }
}

export const WCIPF_DATA: WcipfItem[] = [
    {
      name: "Junior Doctor",
      plural: "Junior Doctors",
      cost: 30000
    },
    {
      name: "School Meal",
      plural: "School Meals",
      cost: 3.00
    }
];