import { Platform } from 'react-native';

const isPlatform = Platform.OS === 'ios' ? 'Baloo Bhai' : 'Baloo-Regular';

export default {
  primary: isPlatform,
  secondary: 'Libre-Regular',
  terciary: 'Libre-Italic',
};
