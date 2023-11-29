import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import DeputadoStack from './screens/deputados/DeputadoStack';
import Noticias from './screens/noticias/Noticias';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <>
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator initialRouteName='Disciplinas'>
          <Tab.Screen
            name="Deputados" 
            component={DeputadoStack}
            options={{
              tabBarIcon: () => (
                <MaterialCommunityIcons name="bookshelf" size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Noticias" 
            component={Noticias}
            options={{
              tabBarIcon: () => (
                <MaterialCommunityIcons name="book-open-variant" size={26} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
