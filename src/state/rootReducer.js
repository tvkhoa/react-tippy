import { branch as appBranch } from '../state';
import {
  combineReducers,
} from 'redux';

export const rootReducer = combineReducers({
  ...appBranch,
});

export default rootReducer;
