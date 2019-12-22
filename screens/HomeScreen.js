import React,{Component} from "react"
import { StyleSheet, Text, View } from 'react-native';
import {Header, Left, Right, Icon} from 'native-base'

class HomeScreen extends Component{


    render(){
        return(
            <View style = {styles.container}>
                <Header>
                    <Left>
                        <Icon name="menu" onPress={()=>this.props.navigation.openDrawer()}/>
                    </Left>
                </Header>
                <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                <Text>HomeScreen</Text>
                </View>
              
            </View>
        );
    }
    static navigationOptions = {
        drawerIcon : ({tintColor})=>(
        <Icon name="home" style={{fontSize:24, color:tintColor}}/>
        )
    }
}
export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})