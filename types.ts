import {StyleProp, ViewStyle} from 'react-native';

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

export interface WelcomeBarProps {
  newNotifications?: boolean;
  heading: string;
  subheading: string;
  image: number;
  style?: StyleProp<ViewStyle>;
  variant: 'notification' | 'settings';
}
