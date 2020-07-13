import {Navigation} from 'react-native-navigation';
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import SideMenu from './pages/SideMenu';
import GolpoCards from './pages/GolpoCards';
import StoryOne from './Story/StoryOne';

Navigation.registerComponent('HomePage', () => Home);
Navigation.registerComponent('AboutPage', () => About);
Navigation.registerComponent('SideMenu', () => SideMenu);
Navigation.registerComponent('GolpoCards', () => GolpoCards);
Navigation.registerComponent('StoryOne', () => StoryOne);

const stack={
    id:"CenterScreen",

    children:[
        {
            component:{
                name:'HomePage',
                options:{
                    topBar:{
                        title:{
                            text:"হোম"
                        },
                        leftButtons:{
                            icon:require('./images/menu.png')
                        }


                    }
                }

            },
        }


    ]

}



Navigation.events().registerAppLaunchedListener(() => {

    Navigation.setRoot({
        root:{
          sideMenu:{
              left:{
                 component:{
                     name:"SideMenu"
                 }
              },
              center:{
                  stack
              }
          }
        }

    });
});
