import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 

import ProductDetail from './Screens/ProductDetail';
import PickColorProduct from './Screens/PickColorProduct';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProductDetail">
        <Stack.Screen 
          name="ProductDetail" 
          component={ProductDetail} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="PickColorProduct" 
          component={PickColorProduct} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
