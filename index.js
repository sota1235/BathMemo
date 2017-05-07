import Navigator from 'native-navigation';
import {
  CALENDAR, RECORDBATH, BATHDETAIL,
} from './routes';

Navigator.registerScreen(CALENDAR, () => require('./screens/Calendar'));
Navigator.registerScreen(RECORDBATH, () => require('./screens/RecordBath'));
Navigator.registerScreen(BATHDETAIL, () => require('./screens/BathDetail'));
