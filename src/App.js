import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Splash } from './pages';
import { Ruter } from './Router';

// import { NavigationContainer } from '@react-navigation/native';
// import FlashMessage from 'react-native-flash-message';
// import { GetStarted, Splash, Register, Login, Home} from './pages';
// import { Ruter } from './Router';


// import { NavigationContainer } from '@react-navigation/native';



const App = () => {
  return (
    <>
    <NavigationContainer>
      <Ruter />
    </NavigationContainer>

    </>
    );




    

  //   <>
  // <NavigationContainer>
  //  <Ruter />
  //   </NavigationContainer>  
  //    <FlashMessage position="top" />
  //    </>
  
};





export default App;