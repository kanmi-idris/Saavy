declare module 'react-native-pinchable' {
  import {Component} from 'react';
  import {ViewProps} from 'react-native';

  interface PinchableProps extends ViewProps {
    minimumZoomScale?: number;
    maximumZoomScale?: number;
  }

  export default class Pinchable extends Component<PinchableProps> {}
}
