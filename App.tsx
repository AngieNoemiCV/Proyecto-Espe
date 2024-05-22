import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
//import {createStackNavigator} from '@react-navigation/stack';
import HealthScreen from './screens/HealthScreen';
import SportsScreen from './screens/SportsScreen';
import TechScreen from './screens/TechScreen';
import Business from './screens/Business';
import Foro from './screens/Foro';
import Perfil from './screens/Perfil';
// import NotificationsScreen from './screens/NotificationsScreen';
// import HistoryScreen from './screens/HistoryScreen';
// import HelpScreen from './screens/HelpScreen';
//import Login from './screens/Login';

//const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App (): React.JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator>

        <Tab.Screen name="Inicio" component={Business}
          options={{
            tabBarIcon: (props) => (
              <Icon type='entypo' name='home' color={props.color} />
            ),
          }} />

        <Tab.Screen name="Estadisticas" component={HealthScreen}
          options={{
            tabBarIcon: (props) => (
              <Icon type='materialicons' name='bar-chart' color={props.color} />
            ),
          }} />

        <Tab.Screen name="Trofeos" component={SportsScreen}
          options={{
            tabBarIcon: (props) => (
              <Icon type='entypo' name="trophy" color={props.color} />
            ),
          }} />

        <Tab.Screen name="Asesorias" component={TechScreen}
          options={{
            tabBarIcon: (props) => (
              <Icon type='entypo' name="mail" color={props.color} />
            ),
          }} />

        <Tab.Screen name="Foro" component={Foro}
          options={{
            tabBarIcon: (props) => (
              <Icon type='materialicons' name='forum' color={props.color} />
            ),
          }} />

        <Tab.Screen name="Perfil" component={Perfil}
          options={{
            tabBarIcon: (props) => (
              <Icon type='Ionicins' name='people' color={props.color} />
            ),
            
          }} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

// export default function AppNavigator() {
//   return (
//     <Stack.Navigator initialRouteName="Perfil">
//       <Stack.Screen name="Notifications" component={NotificationsScreen} />
//       <Stack.Screen name="History" component={HistoryScreen} />
//       <Stack.Screen name="Help" component={HelpScreen} />
//     </Stack.Navigator>
//   );
// }

/* export default function App (): React.JSX.Element {
   return (
     <NavigationContainer>
       <Stack.Navigator initialRouteName="Login">
         <Stack.Screen
           name="Login"
           component={Login}
           options={{headerShown: false}}
         />
         <Stack.Screen name="Tabs" component={TabNavigator} options={{headerShown: false}} />
       </Stack.Navigator>
     </NavigationContainer>
   );
 }*/

 