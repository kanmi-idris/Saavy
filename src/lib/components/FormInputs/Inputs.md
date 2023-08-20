# BasicInput Component

This component is a custom input field that can be used for various types of inputs, such as text, password, numeric, or multiline. It supports the following features:

- Optional icons at the start and end of the input field
- Optional label and extra information above and below the input field
- Optional error message that changes the border and text color to red
- Optional auto-complete for email or phone number inputs
- Optional disabled state that prevents editing and changes the background and border color to gray
- Customizable focus state that changes the border color to green
- Customizable on-focus callback function
- Password input type that allows toggling the visibility of the password by pressing the end icon

## Usage

To use this component, you need to import it from '@/components/BasicInput' and pass the following props:

| Prop | Type | Description | Default |
| --- | --- | --- | --- |
| iconStart | string | The name of the icon to be displayed at the start of the input field. The icon should be imported from '@/assets/Icons'. | undefined |
| iconEnd | string | The name of the icon to be displayed at the end of the input field. The icon should be imported from '@/assets/Icons'. | undefined |
| label | string | The text to be displayed above the input field. | undefined |
| extraInfo | string | The text to be displayed below the input field. This prop is ignored if errorMessage is provided. | undefined |
| placeholder | string | The text to be displayed as a placeholder when the input field is empty. | undefined |
| errorMessage | string | The text to be displayed as an error message below the input field. This prop also changes the border and text color to red. | undefined |
| autoComplete | 'email' \| 'tel' | The type of auto-complete to be applied for the input field. This prop only works for text inputs. | undefined |
| disabled | boolean | Whether the input field is disabled or not. This prop prevents editing and changes the background and border color to gray. | false |
| type | 'multiline' \| 'text' \| 'numeric' \| 'password' | The type of input to be accepted by the input field. This prop determines the keyboard type, the multiline option, and the secure text entry option. | 'text' |
| customOnFocus | () => void | A callback function to be executed when the input field is focused. This prop can be used for custom logic or effects. | undefined |

You can also pass any other props that are supported by the TextInput component from react-native.

## Example

Here is an example of how to use this component in your code:

```jsx
import BasicInput from '@/components/BasicInput';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={{padding: 16}}>
      <BasicInput
        iconStart="mail"
        label="Email"
        placeholder="Enter your email"
        autoComplete="email"
        value={email}
        onChangeText={setEmail}
      />
      <BasicInput
        iconStart="lock"
        iconEnd="eyeOff"
        label="Password"
        placeholder="Enter your password"
        type="password"
        value={password}
        onChangeText={setPassword}
      />
    </View>
  );
};

export default App;
```

# SecurePinInput Component

This component is a custom input field that can be used for entering a secure PIN code. It supports the following features:

- A hidden text input that accepts only numeric characters
- A row of boxes that display the entered digits as dots
- Optional error message that changes the border and text color to red
- Optional disabled state that prevents editing and changes the background and border color to gray
- Customizable focus state that changes the border color to green
- Customizable callback functions to set the PIN value and the PIN ready status

## Usage

To use this component, you need to import it from '@/components/SecurePinInput' and pass the following props:

| Prop | Type | Description | Default |
| --- | --- | --- | --- |
| errorMessage | string | The text to be displayed as an error message below the input field. This prop also changes the border and text color to red. | undefined |
| disabled | boolean | Whether the input field is disabled or not. This prop prevents editing and changes the background and border color to gray. | false |
| maxLength | number | The maximum length of the PIN code. This prop determines the number of boxes to be displayed and the keyboard type. | undefined |
| setIsPinReady | (isPinReady: boolean) => void | A callback function to be executed when the PIN code is complete or incomplete. This prop can be used for custom logic or effects. | undefined |
| setPin | (pin: string) => void | A callback function to be executed when the PIN value changes. This prop can be used for setting the state of the PIN value. | undefined |
| pin | string | The current value of the PIN code. This prop should be passed from the state of the parent component. | undefined |

You can also pass any other props that are supported by the TextInput component from react-native.

## Example

Here is an example of how to use this component in your code:

```jsx
import SecurePinInput from '@/components/SecurePinInput';
import CustomButton from '@/components/CustomButton';

const App = () => {
  const [pin, setPin] = useState('');
  const [isPinReady, setIsPinReady] = useState(false);

  const MAX_LENGTH = 4;

  return (
    <View style={{padding: 16}}>
      <Text>Enter your PIN</Text>
      <Pressable style={{flex: 0.1}} onPress={Keyboard.dismiss}>
        <SecurePinInput
          pin={pin}
          setPin={setPin}
          maxLength={MAX_LENGTH}
          setIsPinReady={setIsPinReady}
        />
      </Pressable>
      {isPinReady && <Text>PIN is ready</Text>}
      <CustomButton
        label="Confirm"
        variant="primary"
        disable={isPinReady ? false : true}
      />
    </View>
  );
};

export default App;
```
