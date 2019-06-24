import { employeesConstants } from '../_constants';

export function employees(state = {}, action) {
  //alert(action.type);
  //alert(JSON.stringify(action.company));
  switch (action.type) {
    case employeesConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case employeesConstants.GETALL_SUCCESS:
      return {
        items: action.employees
      };
    case employeesConstants.GETALL_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}