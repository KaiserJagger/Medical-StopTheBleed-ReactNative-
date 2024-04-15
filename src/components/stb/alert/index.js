import { Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default {
  show: () => {
    Alert.alert(
            'Warning',
            'You need to be logged in to perform that action. Would you like to log in?',
      [
             { text: 'No' },
             { text: 'Yes', onPress: () => { Actions.login(); } },
      ],
          { cancelable: false }
        );
  },
};
