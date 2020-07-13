import React, {Component} from 'react';
import {Text, View,Button} from 'native-base';
import {ImageBackground,SafeAreaView} from 'react-native'
import {Navigation} from 'react-native-navigation';

class Home extends Component {

constructor(props) {
    super(props)
    Navigation.events().bindComponent(this);

}

    navigationButtonPressed({componentId}){
        Navigation.mergeOptions(this.props.componentId,{
            sideMenu: {
                left: {
                    visible: true

                }
            }
        });

    }

    goCards=()=>{
    Navigation.push(this.props.componentId,{
        component:{
            name:'GolpoCards',
            options:{
                topBar:{
                    title:{
                        text:'গল্প সমূহ'
                    },


                }
            },
            passProps:{
                text:"I am GolpoSomuho"
            }

        }

    })




    }
    render() {
        return (
            <SafeAreaView style={{flex:1}}>
                <ImageBackground style={{flex:1}} source={{uri:'https://bongquotes.com/wp-content/uploads/2020/01/Gopal-Bhar-stories-bengali-bongquotes.jpg'}}>

                        <View style={{flex:1,padding:10,justifyContent:'center',alignItems:'center',marginBottom:150}}>
                            <Button  warning><Text onPress={this.goCards} style={{fontSize:18}}>পড়তে চাইলে ক্লিক করো!! </Text></Button>
                        </View>


            </ImageBackground>
            </SafeAreaView>
        );
    }
}

export default Home;
