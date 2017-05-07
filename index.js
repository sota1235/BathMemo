import Navigator from 'native-navigation';
import {
  SCREENONE, CALENDAR, RECORDBATH, BATHDETAIL,
} from './routes';

Navigator.registerScreen(SCREENONE, () => require('./screens/ScreenOne'));
Navigator.registerScreen(CALENDAR, () => require('./screens/Calendar'));
Navigator.registerScreen(RECORDBATH, () => require('./screens/RecordBath'));
Navigator.registerScreen(BATHDETAIL, () => require('./screens/BathDetail'));
