// Copy to Clipboard Function
import Clipboard from '@react-native-clipboard/clipboard';
export const copyToClipboard = (text: string) => {
  Clipboard.setString(text);
};
