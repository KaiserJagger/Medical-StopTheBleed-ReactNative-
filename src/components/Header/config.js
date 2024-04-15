import { Actions } from 'react-native-router-flux';
import { Theme } from '../../components/stb/index';

const configs = {
  hero: require('../../assets/images/stb_logo.png'),
  theme: {
    backgroundColor: Theme.colorSettings.core.headerColor,
    titleColor: 'white'
  },
  templates: {
    tabs: {
      left: [''],
      center: ['brand'],
      right: ['']
    },
    modal: {
      left: [''],
      center: ['brand'],
      right: [
        {
          type: 'button',
          action: () => {
            Actions.home();
          },
          data: {
            title: 'Close'
          }
        }
      ]
    }
  }
};

export default configs;
