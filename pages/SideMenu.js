import React, {Component} from 'react';
import {Text, View} from 'native-base';
import {Image} from "react-native";
import {Navigation} from 'react-native-navigation';

class SideMenu extends Component {

    goAbout=()=>{
        Navigation.push('CenterScreen',{

            component:{
                name:'AboutPage',
                options:{
                    sideMenu:{
                        left:{
                            visible:false
                        }

                    },
                    topBar:{
                        title:{
                            text:'ডেভেলপার সম্পর্কে'
                        }
                    }
                }
            }


        })



    }


    render() {
        return (
            <View style={{flex:1}}>

                <Image source={require("../images/gopalMenu.jpg")}/>

                <View style={{flex:1,marginRight:97,backgroundColor:'white'}}>
                    <View style={{flex:1,backgroundColor:'white',marginTop:40}}>
                    <View style={{flexDirection:'row'}}>
                        <Image source={require("../images/about.png")}/>

                        <Text onPress={this.goAbout} style={{marginLeft:8}}>ডেভেলপার সম্পর্কে</Text>
                    </View>
                        <View style={{marginTop:20,flexDirection:'row'}}>

                            <Image  source={require("../images/share.png")}/>
                            <Text style={{marginLeft:8}}>শেয়ার</Text>
                        </View>


                    </View>

                </View>

            </View>
        );
    }
}

export default SideMenu;
