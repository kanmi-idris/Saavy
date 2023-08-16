# Assets Folder

This folder contains all the static assets that are used in the React Native project. It includes images, icons, fonts, colors, and typography.

## Images

The images folder contains all the static images that are used in the project. These images are imported as SVG files, which are scalable vector graphics that can be resized without losing quality. The images folder has one subfolder:

- Logo.svg: This is the logo of the Saavy app, which is a green circle with the word "Saavy" in white.

To use an image in the project, you can import it as a React component and use it as a JSX element. For example:

```jsx
import React from 'react';
import Logo from './assets/images/Logo.svg';

const App = () => {
  return (
    <View>
      <Logo width={100} height={100} />
    </View>
  );
};
```

## Icons

The icons folder contains all the icons that are used in the project. These icons are created as React components using the react-native-svg library, which allows you to create and render SVG elements in React Native. The icons folder has many subfolders, each named after the icon file. For example:

- fi_home.tsx: This is the icon of a home, which is used to represent the home screen or tab.
- fi_dollar.tsx: This is the icon of a dollar sign, which is used to represent money or currency.
- fi_help-circle.tsx: This is the icon of a circle with a question mark, which is used to represent help or support.

To use an icon in the project, you can import it as a React component and use it as a JSX element. For example:

```jsx
import React from 'react';
import HomeIcon from './assets/icons/fi_home';
import DollarIcon from './assets/icons/fi_dollar';
import HelpCircleIcon from './assets/icons/fi_help-circle';

const App = () => {
  return (
    <View>
      <HomeIcon width={16} height={16} stroke="blue" />
      <DollarIcon width={16} height={16} stroke="green" />
      <HelpCircleIcon width={16} height={16} stroke="red" />
    </View>
  );
};
```

You can also use the Icon component, which is a wrapper component that allows you to use any icon by passing its name as a prop. The Icon component is located in the Icon.tsx file, which also imports all the icons from the icons folder. For example:

```jsx
import React from 'react';
import Icon from './assets/Icon';

const App = () => {
  return (
    <View>
      <Icon name="home" width={16} height={16} stroke="blue" />
      <Icon name="dollar" width={16} height={16} stroke="green" />
      <Icon name="helpCircle" width={16} height={16} stroke="red" />
    </View>
  );
};
```

OR

```jsx
import React from 'react';
import Icon from './assets/Icon';
import colors from './assets/Colors';

const App = () => {
  // This is the object that contains the common icon properties
  const iconProps = {
    width: 16,
    height: 16,
    stroke: colors.link,
  };

  return (
    <View>
      <Icon name="home" {...iconProps} />
      <Icon name="dollar" {...iconProps} />
      <Icon name="helpCircle" {...iconProps} />
    </View>
  );
};

```

I recommend using this method to use the Icon component in the project, as it is more convenient and efficient than passing each property individually. It also makes your code more readable and maintainable, as you can easily change the icon properties in one place. However, you can also use other methods to use the Icon component, such as passing each property individually or using a different object for each icon. You can choose the method that suits your needs and preferences best.

The Icon component accepts the following props:

- name: The name of the icon to use. It must match one of the names of the icons in the icons folder. For example: "home", "dollar", "helpCircle".
- width: The width of the icon in pixels. It must be a positive number.
- height: The height of the icon in pixels. It must be a positive number.
- stroke: The color of the icon stroke. It can be any valid color value, such as a hex code, an RGB value, or a color name. For example: "#FF0000", "rgb(0, 255, 0)", "blue".
- fill: The color of the icon fill. It can be any valid color value, such as a hex code, an RGB value, or a color name. For example: "#FF0000", "rgb(0, 255, 0)", "blue". If not specified, it defaults to "none", which means no fill.
- strokeWidth: The width of the icon stroke in pixels. It must be a positive number. If not specified, it defaults to 2.
- strokeLinecap: The shape of the icon stroke ends. It can be one of these values: "butt", "round", or "square". If not specified, it defaults to "round".
- strokeLinejoin: The shape of the icon stroke corners. It can be one of these values: "miter", "round", or "bevel". If not specified, it defaults to "round".
- style: The style object to apply to the icon. It can be any valid React Native style object, such as {margin: 10, opacity: 0.5}.
- onPress: The function to execute when the icon is pressed. It can be any valid React Native onPress function, such as () => alert("Hello").

## Fonts

The fonts folder contains all the fonts that are used in the project. These fonts are downloaded from Google Fonts, which is a free and open source collection of fonts. The fonts folder has many subfolders, each named after the font file. For example:

- Montserrat-Black.ttf: This is the font file for the Montserrat Black font, which is a very bold and heavy font.
- Montserrat-Regular.ttf: This is the font file for the Montserrat Regular font, which is a normal and balanced font.
- Montserrat-Thin.ttf: This is the font file for the Montserrat Thin font, which is a very light and thin font.

To use a new font in the project, you need to do two things:

1. Link the font file to the project using the [react-native-asset]to automatically link the font assets. Just run the following command. For example:

```bash
npx react-native-asset
```

This will copy the font file to the appropriate location in the project and update the configuration files accordingly.

2. Add font name to the Fonts.ts file, like this.

```jsx
const fonts = {
  black900: 'Montserrat-Black',
  extraBold800: 'Montserrat-ExtraBold',
  bold700: 'Montserrat-Bold',
  semiBold600: 'Montserrat-SemiBold',
  medium500: 'Montserrat-Medium',
  regular400: 'Montserrat-Regular',
  light300: 'Montserrat-Light',
  extraLight200: 'Montserrat-ExtraLight',
  thin100: 'Montserrat-Thin',
};

export default fonts;

```

3. Import the font name from the Fonts.ts file, which contains all the font names as constants. For example:

```jsx
import React from 'react';
import {Text} from 'react-native';
import fonts from './assets/Fonts';

const App = () => {
  return (
    <View>
      <Text style={{fontFamily: fonts.black900}}>This is Montserrat Black</Text>
      <Text style={{fontFamily: fonts.regular400}}>This is Montserrat Regular</Text>
      <Text style={{fontFamily: fonts.thin100}}>This is Montserrat Thin</Text>
    </View>
  );
};
```

The Fonts.ts file contains the following constants:

- black900: The name of the Montserrat Black font.
- extraBold800: The name of the Montserrat ExtraBold font.
- bold700: The name of the Montserrat Bold font.
- semiBold600: The name of the Montserrat SemiBold font.
- medium500: The name of the Montserrat Medium font.
- regular400: The name of the Montserrat Regular font.
- light300: The name of the Montserrat Light font.
- extraLight200: The name of the Montserrat ExtraLight font.
- thin100: The name of the Montserrat Thin font.

## Colors

The colors folder contains all the colors that are used in the project. These colors are imported as constants from the Colors.ts file, which contains all the color values as hex codes. The colors folder has one subfolder:

- Colors.ts: This is the file that contains all the color values as hex codes.

To use a color in the project, you can import it as a constant and use it as a style value. For example:

```jsx
import React from 'react';
import {View} from 'react-native';
import colors from './assets/Colors';

const App = () => {
  return (
    <View>
      <View style={{width: 100, height: 100, backgroundColor: colors.green_1}} />
      <View style={{width: 100, height: 100, backgroundColor: colors.black_1}} />
      <View style={{width: 100, height: 100, backgroundColor: colors.red_1}} />
    </View>
  );
};
```

The Colors.ts file contains the following constants:

- link: The color of links or buttons that are clickable. It is a bright blue color with a hex code of #4154FF.
- white: The color of white or empty spaces. It is a pure white color with a hex code of #FFFFFF.
- activeBtn: The color of buttons or tabs that are active or selected. It is a bright green color with a hex code of #14C584.
- green_1: The color of green with a shade of 1. It is a dark green color with a hex code of #16DB93.
- green_2: The color of green with a shade of 2. It is a slightly lighter green color with a hex code of #30DF9F.
- green_3: The color of green with a shade of 3. It is a medium green color with a hex code of #4AE3AB.
- green_4: The color of green with a shade of 4. It is a slightly brighter green color with a hex code of #64E7B7.
- green_5: The color of green with a shade of 5. It is a light green color with a hex code of #7EEBC3.
- green_6: The color of green with a shade of 6. It is a very light green color with a hex code of #97EFCF.
- green_7: The color of green with a shade of 7. It is a pale green color with a hex code of #B1F3DB.
- green_8: The color of green with a shade of 8. It is a very pale green color with a hex code of #CBF7E7.
- green_9: The color of green with a shade of 9. It is a white-green color with a hex code of #E5FBF3.
- black_1: The color of black with a shade of 1. It is a pure black color with a hex code of #000000.
- black_2: The color of black with a shade of 2. It is a very dark gray color with a hex code of #1C1C1C.
- black_3: The color of black with a shade of 3. It is a dark gray color with a hex code of #393939.
- black_4: The color of black with a shade of 4. It is a medium gray color with a hex code of #555555.
- black_5: The color of black with a shade of 5. It is a light gray color with a hex code of #717171.
- black_6: The color of black with a shade of 6. It is a very light gray color with a hex code of #8E8E8E.
- black_7: The color of black with a shade of 7. It is a pale gray color with a hex code of #AAAAAA.
- black_8: The color of black with a shade of 8. It is a very pale gray color with a hex code of #C6C6C6.
- black_9: The color of black with a shade of 9. It is a white-gray color with a hex code of #E3E3E3.
- red_1: The color of red with a shade of 1. It is a bright red color with a hex code of #FF5139.
- red_2: The color of red with a shade of 2. It is a slightly lighter red color with a hex code of #FF644F.
- red_3: The color of red with a shade of 3. It is a medium red color with a hex code of #FF7865.
- red_4: The color of red with a shade of 4. It is a slightly brighter red color with a hex code of #FF8B7B.
- red_5: The color of red with a shade of 5. It is a light red color with a hex code of #FF9E91.
- red_6: The color of red with a shade of 6. It is a very light red color with a hex code of #FFB2A7.
- red_7: The color of red with a shade of 7. It is a pale red color with a hex code of #FFC5BD.
- red_8: The color of red with a shade of 8. It is a very pale red color with a hex code of #FFD8D3.
- red_9: The color of red with a shade of 9. It is a white-red color with a hex code of #FFECE9.

## Typography

The typography folder contains all the typography styles that are used in the project. These typography styles are imported as objects from the Typography.ts file, which contains all the typography properties as values. The typography folder has one subfolder:

- Typography.ts: This is the file that contains all the typography properties as values.

To use a typography style in the project, you can import it as an object and use it as a style value. For example:

```jsx
import React from 'react';
import {Text} from 'react-native';
import typography from './assets/Typography';

const App = () => {
  return (
    <View>
      <Text style={typography.bold.heading01}>This is Montserrat Bold Heading 01</Text>
      <Text style={typography.semiBold.heading02}>This is Montserrat SemiBold Heading 02</Text>
      <Text style={typography.regular.paragraphMid}>This is Montserrat Regular Paragraph Mid</Text>
    </View>
  );
};
```

OR

```jsx
import React from 'react';
import {Text} from 'react-native';
import typography from './assets/Typography';
import colors from './assets/Colors';

const App = () => {
  return (
    <View>
      <Text style={{...typography.bold.heading01, color: colors.green_1}}>
        This is Montserrat Bold Heading 01 with Green 1 color
      </Text>
      <Text style={{...typography.semiBold.heading02, color: colors.black_1}}>
        This is Montserrat SemiBold Heading 02 with Black 1 color
      </Text>
      <Text style={{...typography.regular.paragraphMid, color: colors.red_1}}>
        This is Montserrat Regular Paragraph Mid with Red 1 color
      </Text>
    </View>
  );
};

```

This example shows how to use the spread operator (…) to combine the typography styles with the color styles. The spread operator copies all the properties from one object to another, and allows you to override or add new properties as well. In this case, the spread operator copies all the properties from the typography styles, such as font size and font family, and then adds a new property for the color style, such as color. This way, you can customize the appearance of your texts with different typography and color combinations.

The Typography.ts file contains the following objects:

- bold: This object contains all the typography styles that use the Montserrat Bold font. It has the following properties:
  - display: This property contains the typography style for large and prominent texts, such as titles or banners. It has a font size of 57.33 pixels and a font family of Montserrat Bold.
  - heading01: This property contains the typography style for large and important texts, such as headings or subheadings. It has a font size of 47.78 pixels and a font family of Montserrat Bold.
  - heading02: This property contains the typography style for medium and significant texts, such as headings or subheadings. It has a font size of 39.81 pixels and a font family of Montserrat Bold.
  - heading03: This property contains the typography style for small and notable texts, such as headings or subheadings. It has a font size of 33.18 pixels and a font family of Montserrat Bold.
  - heading04: This property contains the typography style for tiny and remarkable texts, such as headings or subheadings. It has a font size of 27.65 pixels and a font family of Montserrat Bold.
  - heading05: This property contains the typography style for very tiny and outstanding texts, such as headings or subheadings. It has a font size of 23.04 pixels and a font family of Montserrat Bold.
  - heading06: This property contains the typography style for extremely tiny and striking texts, such as headings or subheadings. It has a font size of 19.2 pixels and a font family of Montserrat Bold.
  - subHeading: This property contains the typography style for texts that are smaller than headings but larger than paragraphs, such as subheadings or captions. It has a font size of 16 pixels and a font family of Montserrat Bold.
  - caption: This property contains the typography style for texts that are used to provide additional information or context, such as captions or labels. It has a font size of 16 pixels, a letter spacing of 0.5 pixels, and a font family of Montserrat Bold.
- semiBold: This object contains all the typography styles that use the Montserrat SemiBold font. It has the same properties as the bold object, but with a different font family.
- medium: This object contains all the typography styles that use the Montserrat Medium font. It has the same properties as the bold object, but with
