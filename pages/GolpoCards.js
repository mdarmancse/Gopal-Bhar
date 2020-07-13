import React, {Component} from 'react';
import {Image, SafeAreaView, Text, View,FlatList} from "react-native";
import {Navigation} from 'react-native-navigation';

class GolpoCards extends Component {

    constructor(props) {
        super(props);
        Navigation.events().bindComponent(this)
    }

    goStory=()=>{

        Navigation.push(this.props.componentId,{
            component:{
                name:"StoryOne",
                    options:{

                    topBar:{
                        
                        title:{
                            text:'গোপাল ও বালক'
                        }
                    }
                    }

            }
        })

    }


    MyData=[

        {id:"1",title:'গোপাল ও বালক',subtitle:'এক বালক গোপালের বাগানে ফল পেড়ে খাচ্ছিল। প্রতিবেশী লোকেরা ছেলেটাকে ধরে নিয়ে এল বাগান থেকে। যথাসময়ে ....see more',img:'https://5.imimg.com/data5/CN/UG/MY-15272715/ssgopaldvd08-gopal-bhar-vol-8-dvd-500x500.png'},
        {id:"2",title:'স্মৃতি-শক্তি',subtitle:'This is my nation,i dont proud of country',img:'https://scontent.fcgp3-1.fna.fbcdn.net/v/t1.0-9/19366597_333595653728276_8162598031773609231_n.png?_nc_cat=102&_nc_sid=85a577&_nc_ohc=s2jxCFpoPkwAX-VokC7&_nc_ht=scontent.fcgp3-1.fna&oh=3e0567a06d10698b808bff68bce45da1&oe=5ECD43F1'},
        {id:"3",title:'মহাজনের টাকার থলি',subtitle:'This is my nation,i am proud of country',img:'https://scontent.fcgp3-1.fna.fbcdn.net/v/t31.0-8/19400409_333599233727918_8999302041523229773_o.jpg?_nc_cat=105&_nc_sid=dd9801&_nc_ohc=z6AfgVO78IoAX-EcsA6&_nc_ht=scontent.fcgp3-1.fna&oh=7cf514dbac152c5320881aae19c0d31e&oe=5ECE8F68'},
        {id:"4",title:'গোপালের গুরু',subtitle:'This is my nation,i am proud of country',img:'http://www.theindependentbd.com/assets/news_images/GOPAL-BHAR.jpg'},
        {id:"5",title:'গোপালের ভাইপো',subtitle:'This is my nation,i am proud of country',img:'https://scontent.fcgp3-1.fna.fbcdn.net/v/t1.0-9/934830_855887297755414_1529740020435104666_n.jpg?_nc_cat=107&_nc_sid=dd9801&_nc_ohc=sFbpdbIvI50AX_9XLnA&_nc_ht=scontent.fcgp3-1.fna&oh=07a20ec4e2b16884acd3ea707a8207a2&oe=5ECD06C8'},
        {id:"6",title:'বিয়ের ঘটকালি',subtitle:'This is my nation,i am proud of country',img:'https://www.booktopia.com.au/http_coversbooktopiacomau/big/9781975617349/0000/hasir-raja-gopal-bhar.jpg'},
        {id:"7",title:'গোপাল ও মা কালী',subtitle:'This is my nation,i am proud of country',img:'https://scontent.fcgp3-1.fna.fbcdn.net/v/t1.0-9/78354871_106061547538941_8769593082581614592_n.jpg?_nc_cat=107&_nc_sid=dd9801&_nc_ohc=hK87NSpisoMAX8AYzNu&_nc_ht=scontent.fcgp3-1.fna&oh=7ad6b375cdd03c1d7fc26e33df8eecaf&oe=5ED0516E'},
        {id:"8",title:'আলুর গুদামে আগুন',subtitle:'This is my nation,i am proud of country',img:'http://www.theindependentbd.com/assets/news_images/GOPAL-BHAR.jpg'},
        {id:"9",title:'গোপালের গোয়েন্দাগিরি',subtitle:'This is my nation,i am proud of country',img:'https://5.imimg.com/data5/CN/UG/MY-15272715/ssgopaldvd08-gopal-bhar-vol-8-dvd-500x500.png'},
        {id:"10",title:'গোপালের সূক্ষ্ম বিচার',subtitle:'This is my nation,i am proud of country',img:'https://www.booktopia.com.au/http_coversbooktopiacomau/big/9781975617349/0000/hasir-raja-gopal-bhar.jpg'},
        {id:"11",title:'গোপাল ও মৌলবী',subtitle:'This is my nation,i am proud of country',img:'https://images-na.ssl-images-amazon.com/images/I/61DdQSoVKUL._SX321_BO1,204,203,200_.jpg'},
        {id:"12",title:'গোপালের পাঞ্জাবি',subtitle:'This is my nation,i am proud of country',img:'https://5.imimg.com/data5/YT/TQ/MY-15272715/ssgopaldvd06-gopal-bhar-dvd-vol-6-500x500.png'}

    ];


    ChildView=({ChildTitle,ChildImage,ChildSubtitle})=>{
        return(
            <SafeAreaView style={{flex:1}}>
                <View style={{flexDirection:'column', width:170,backgroundColor:'white',padding:10,margin:20,height:"50%",flex:100}}>

                    <View style={{flex:40}}>
                        <Image style={{height:"100%",width:"100%",padding:2}} source={{uri:ChildImage}}/>

                    </View>

                    <View style={{backgroundColor:'white',flex:50,marginBottom:20}}>
                        <Text  onPress={this.goStory} style={{marginTop:20,color:'black',fontSize:18}}>{ChildTitle}</Text>
                        <Text style={{color:'black',fontSize:16}}>{ChildSubtitle}</Text>
                    </View>


                </View>
            </SafeAreaView>
    );


    }



    render() {
        return (

        <FlatList keyExtractor={item =>item.id}  horizontal={true} data={this.MyData} renderItem={({item})=><this.ChildView ChildTitle={item.title}  ChildSubtitle={item.subtitle} ChildImage={item.img} />}/>

        );
    }
}

export default GolpoCards;
