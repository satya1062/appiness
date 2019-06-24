import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { employees } from './employees.reducer';
import { alert } from './alert.reducer';

const rootReducer = combineReducers({
  authentication,
  employees,
  alert
});

export default rootReducer;
