import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, Image } from 'react-native';
import {createDrawerNavigator, DrawerItems} from 'react-navigation'
import HomeScreen from './screens/HomeScreen'
import SettingsScreen from './screens/SettingsScreen'

export default function App() {
  return (
    <AppDrawerNavigator />
  );
}

const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{flex:150}}>
    <View style={{height:150,backgroundColor:'white', alignItems:'center',justifyContent: 'center'}}>
      <Image source={require('./assets/user.png')}style={{height:120, width:120, borderRadius:60}}/>
    </View>

    <ScrollView>
      <DrawerItems {...props}/>


    </ScrollView>

  </SafeAreaView>

)

const AppDrawerNavigator = createDrawerNavigator({
  Home:HomeScreen,
  Settings:SettingsScreen
}, {
  contentComponent: CustomDrawerComponent,
  contentOptions:{
    activeTintColor:'orange'
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
