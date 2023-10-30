export type NewsItem = {
  headline: string;
  timestamp: string;
  source: string;
  url: string;
};

export type NewsData = {
  [key: string]: NewsItem[];
};

export type InvestmentType =
  | 'realEstate'
  | 'stocks'
  | 'savingsLock'
  | 'startups'
  | 'mutualFunds';
