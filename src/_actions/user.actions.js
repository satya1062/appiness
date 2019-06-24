import { userConstants } from '../_constants';
//import { userService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const userActions = {
    login
};

const loginData = {
    "username":"hruday@gmail.com",
    "password" :'hruday123'
   };

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));
if((username == loginData.username)&& (password == loginData.password)){
    dispatch(success(loginData));
    history.push('/employee');
}else{
        alert("User name/Password is incorrect");
    //dispatch(failure(error.toString()));
    //dispatch(alertActions.error(error.toString()));
}
       
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}



