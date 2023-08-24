import React, {StrictMode} from 'react';
import RootStackNavigator from '@/navigation/RootStackNavigator';

function App(): JSX.Element {
  return (
    <StrictMode>
      <RootStackNavigator />
    </StrictMode>
  );
}

export default App;
