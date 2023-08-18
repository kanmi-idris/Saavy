# RecommendationCard

This component takes the following props:

- title: This prop is a string that defines the text that you want to display as the title of the card, such as the name of the company or fund.
- subtitle: This prop is a string that defines the text that you want to display as the subtitle of the card, such as the current price or the description of the investment.
- subtext1: This prop is a string or a number that defines the text that you want to display as the first subtext of the card, such as the change in price or the market cap of the investment.
- subtext2: This prop is a number that defines the text that you want to display as the second subtext of the card, such as the 5-year return or the amount raised by the investment.
- type: This prop is a string that defines the type of the investment recommendation, which can be either 'default', 'stocks', or 'startups'. This prop affects how the subtext1 and subtext2 are formatted and displayed on the card.
- image: This prop is a number that defines the source of the image that you want to display on the card, such as the logo of the company or fund. This prop requires you to use the require() function to import a local image file from your project's assets folder.

The component also has some styles that define its appearance, such as colors, fonts, margins, paddings, etc. You can customize these styles according to your preferences and design guidelines.

Here is an example of how you can use this component in your app:

```jsx
import React from 'react';
import { View } from 'react-native';
import RecommendationCard from './RecommendationCard';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <RecommendationCard
        title="Microsoft Corp"
        subtitle="$121.23"
        subtext1="+14.55"
        subtext2="5-yr return 16.96%"
        type="stocks"
        image={require('@/assets/images/MicrosoftLogo.png')}
      />
      {/* Add more cards here */}
    </View>
  );
};

export default App;
```

# MiniInvestmentDetailCard

MiniInvestmentDetailCard is a React Native component that renders a card with some investment details. It can be used to display different types of investment products, such as real estate, mutual funds, stocks, startups, or savings lock.

## Props

The component takes the following props:

- **name**: The name of the investment product. It is a string and required.
- **issuer**: The name of the issuer or provider of the investment product. It is a string and required.
- **image**: The source of the image to display on the card. It is a number and required.
- **amtRaised**: The amount of money raised by the investment product (only applicable for startups). It is a number and optional.
- **price**: The price per unit or minimum investment amount of the investment product. It is a number and required.
- **rate**: The annual or daily return rate of the investment product. It is a number and required.
- **type**: The type of the investment product, which can be one of 'realEstate', 'mutualFunds', 'stocks', 'startups', or 'savingsLock'. It is a string and required.
- **valueCap**: The value cap of the investment product (only applicable for startups). It is a number and optional.
- **term**: The term or maturity period of the investment product. It can be a number or a string and required.

## Logic

The component uses different logic to display different information depending on the type prop. For example, for a savings lock product, it will show the rate and term, while for a startup product, it will show the amount raised and value cap. The component also uses different styles and colors to indicate positive or negative rates.

## Styles

The component uses the following styles:

- **container**: The main view that contains the image and the text blocks. It has a gap of 14, a padding of 16, a border radius of 8, a flex direction of row, an align items of center, and a background color of white.
- **imgWrap**: The view that wraps the image. It has a border radius of 50, a width and height of 40, a background color of green_9, an align items and justify content of center.
- **wrapper**: The view that wraps the text blocks. It has a flex direction of row, a flex of 1, and a justify content of space-between.
- **wrapStart**: The view that wraps the name and issuer text. It has no specific style.
- **wrapEnd**: The view that wraps the middle and last text blocks. It has no specific style.
- **mainText**: The style for the main text in each block. It has a font family of Montserrat-SemiBold, a font size of 14, and a color of black_1.
- **subText**: The style for the sub text in each block. It has a font family of Montserrat-Regular, a font size of 12, and a color of gray_3.
- **longText**: The style for the text that may be too long to fit in one line. It has a number of lines of 1 and an ellipsize mode of tail.
- **positive**: The style for the text that indicates positive rates. It has a color of green_1.
- **negative**: The style for the text that indicates negative rates. It has a color of red_1.

## Example

Here is an example code snippet that uses the MiniInvestmentDetailCard component to render a card with some investment details:

```jsx
<MiniInvestmentDetailCard
  name="FairLock"
  issuer="FairMoney Microfinance Bank"
  image={require('@/assets/images/MicrosoftLogo.png')}
  amtRaised={200000000}
  price={250.11}
  rate={14.55}
  type="savingsLock"
  valueCap={18}
  term="Monthly"
/>
```
