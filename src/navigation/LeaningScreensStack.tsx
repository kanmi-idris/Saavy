// import AllGuidesScreen from '@/screens/Learning/AllGuides';
// import SaavyAIChatbotScreen from '@/screens/Learning/SaavyAI';
// import SingleGuideScreen from '@/screens/Learning/SingleGuide';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import React from 'react';

// export type LearningStackParams = {
//   SaavyAIChatbotScreen: undefined;
//   AllGuidesScreen: undefined;
//   SingleGuideScreen: {
//     title: string;
//     investmentType:
//       | 'real estate'
//       | 'mutual funds'
//       | 'stocks'
//       | 'startups'
//       | 'savings lock';
//   };
// };

// const LearningStack = createNativeStackNavigator<LearningStackParams>();

// const LearningNavigator = () => {
//   return (
//     <LearningStack.Navigator
//       initialRouteName="SaavyAIChatbotScreen"
//       screenOptions={{headerShown: false}}>
//       <LearningStack.Screen
//         name="SaavyAIChatbotScreen"
//         component={SaavyAIChatbotScreen}
//       />
//       <LearningStack.Screen
//         name="AllGuidesScreen"
//         component={AllGuidesScreen}
//       />
//       <LearningStack.Screen
//         name="SingleGuideScreen"
//         component={SingleGuideScreen}
//       />
//     </LearningStack.Navigator>
//   );
// };

// export default LearningNavigator;
