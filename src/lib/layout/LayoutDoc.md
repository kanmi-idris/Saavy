# Section Components

This is a React Native project that contains two reusable components for displaying sections of content in a mobile app. The components are:

- `ScrollableSection`: A component that renders a horizontal scrollable list of items with a heading and an optional filter button.
- `StaticSection`: A component that renders a static section of content with a heading and an optional filter button.

## Usage

To use these components in your app, you need to import them from the source file and pass the required props. For example:

```jsx
import {ScrollableSection, StaticSection} from './path/to/source/file';
import MiniInvestmentDetailCard from './path/to/another/component';

const App = () => {
  return (
    <View>
      <ScrollableSection heading="Summary" horizontal auxBtn>
        <View style={styles.view}>
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
        </View>
        <View style={styles.view}>
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
        </View>
      </ScrollableSection>


      <StaticSection heading="Details" auxBtn>
        <Text>Some text content here</Text>
      </StaticSection>
    </View>
  );
};
```

## Props

The props for each component are:

### ScrollableSection

| Prop       | Type            | Required | Description                                                             |
| ---------- | --------------- | -------- | ----------------------------------------------------------------------- |
| children   | React.ReactNode | Yes      | The items to be rendered in the scrollable list                         |
| heading    | string          | Yes      | The text to be displayed as the section heading                         |
| auxBtn     | boolean         | No       | Whether to show a filter button next to the heading                     |
| horizontal | boolean         | No       | Whether to render the list horizontally or vertically (default is true) |

### StaticSection

| Prop     | Type            | Required | Description                                         |
| -------- | --------------- | -------- | --------------------------------------------------- |
| children | React.ReactNode | Yes      | The content to be rendered in the static section    |
| heading  | string          | Yes      | The text to be displayed as the section heading     |
| auxBtn   | boolean         | No       | Whether to show a filter button next to the heading |

## Styles

The components use StyleSheet.create to define their styles in at the bottom of the source file. You can customize the styles by modifying the style variables or passing your own style props to the components.
