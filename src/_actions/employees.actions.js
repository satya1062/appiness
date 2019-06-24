import { employeesConstants } from '../_constants';
import employeeData from '../employee.json'
export const employeesActions = {
    getAll
};

function getAll() {
    return dispatch => {
        dispatch(request());
        if(employeeData){
var employees = employeeData.user;
dispatch(success(employees));
        }else{
            dispatch(failure());
        }
    };

    function request() { return { type: employeesConstants.GETALL_REQUEST } }
    function success(employees) { return { type: employeesConstants.GETALL_SUCCESS, employees } }
    function failure(error) { return { type: employeesConstants.GETALL_FAILURE, error } }
}

