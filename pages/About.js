import React, {Component} from 'react';
import {View,Text} from 'native-base';
import {Image} from 'react-native';
import {Navigation} from 'react-native-navigation';

class About extends Component {

    render() {
        return (
            <View >

                <Image style={{padding:10,marginRight:50,margin:10,height:'50%',width:'90%'}} source={require('../images/Arman.jpeg')}/>

                <Text style={{padding:10}}>আমি আরমান,পেশায় একজন সফটওয়্যার ইঞ্জিনিয়ার,সবসময় শুধু ডং করি,আর সবাই রে বলি "সারাদিন শুধু ডং ডং,পড়ালেখার নাম নাই কোনোকিছুর দাম নাই আছে শুধু ডং ডং,আছে শুধু ডং ডং"</Text>

            </View>
        );
    }
}

export default About;
