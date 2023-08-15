**Props**

The CustomButton component accepts the following props:

* `disable`: Whether the button should be disabled. Defaults to `false`.
* `iconEnd`: The name of the icon to display at the end of the button.
* `iconStart`: The name of the icon to display at the beginning of the button.
* `label`: The text to display on the button.
* `variant`: The variant of the button. Can be `primary`, `secondary`, or `text`.

**States**

The CustomButton component has the following states:

* `pressed`: Whether the button is currently being pressed.

**Styling**

The CustomButton component is styled using the following styles:

* `BtnStyle`: The base style for the button.
* `defaultPry`: The style for the primary button when it is not pressed.
* `activePry`: The style for the primary button when it is pressed.
* `disabled`: The style for the button when it is disabled.
* `defaultSec`: The style for the secondary button when it is not pressed.
* `activeSec`: The style for the secondary button when it is pressed.
* `Text`: The style for the text on the button when the variant is `text`.
* `activeText`: The style for the text on the button when the variant is `text` and the button is pressed.
* `textSec`: The style for the text on the button when the variant is `secondary`.
* `textPry`: The style for the text on the button when the variant is `primary`.
* `textDisable`: The style for the text on the button when the button is disabled.

**Usage**

The CustomButton component can be used to create a variety of buttons with different styles and functionality. Here is an example of how to use the CustomButton component to create a primary button with an icon:

```
<CustomButton
  disable={false}
  iconEnd="arrowRight"
  iconStart="home"
  label="Get Started"
  variant="primary"
/>
```

This will create a button with a green background, a white text label, and an arrow icon on the right. When the button is pressed, the background will change to a darker green color.

Here is an example of how to use the CustomButton component to create a secondary button with a text label:

```
<CustomButton
  disable={false}
  label="Learn More"
  variant="secondary"
/>
```