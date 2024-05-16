import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Icon } from 'react-native-elements';

import HealthScreen from './screens/HealthScreen';
import SportsScreen from './screens/SportsScreen';
import TechScreen from './screens/TechScreen';
import Business from './screens/Bussines';
import Foro from './screens/Foro';
import Perfil from './screens/Perfil';


const Tab = createBottomTabNavigator();

export default function App() {
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