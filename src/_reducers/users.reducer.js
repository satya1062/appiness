import { userConstants } from '../_constants';

export function users(state = {}, action) {
  switch (action.type) {
    case userConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case userConstants.GETALL_SUCCESS:
    //alert(JSON.stringify(action.users));
      return {
        items: action.users
      };
    case userConstants.GETALL_FAILURE:
      return { 
        error: action.error
      };
      case userConstants.REGISTER_REQUEST:
      return { 
          registering: true 
        };
    case userConstants.REGISTER_SUCCESS:
      return {};
    case userConstants.REGISTER_FAILURE:
      return {};
      case userConstants.EDIT_REQUEST:
      return { 
          editing: true 
        };
    case userConstants.EDIT_SUCCESS:
      return {};
    case userConstants.EDIT_FAILURE:
      return {};
      case userConstants.GETBYID_REQUEST:
      // add 'deleting:true' property to user being deleted
      return {
        getById: true,
        user: action.user
      };
    case userConstants.GETBYID_SUCCESS:
      // remove deleted user from state
      return {
        user: action.user
      };
    case userConstants.GETBYID_FAILURE:
      // remove 'deleting:true' property and add 'deleteError:[error]' property to user 
      return {};
    case userConstants.DELETE_REQUEST:
      // add 'deleting:true' property to user being deleted
      return {
        ...state,
        items: state.items.map(user =>
          user.id === action.id
            ? { ...user, deleting: true }
            : user
        )
      };
    case userConstants.DELETE_SUCCESS:
      // remove deleted user from state
      return {
        items: state.items.filter(user => user.id !== action.id)
      };
    case userConstants.DELETE_FAILURE:
      // remove 'deleting:true' property and add 'deleteError:[error]' property to user 
      return {
        ...state,
        items: state.items.map(user => {
          alert(user.id);
          alert(action.id);
          if (user.id === action.id) {
            // make copy of user without 'deleting:true' property
            const { deleting, ...userCopy } = user;
            // return copy of user with 'deleteError:[error]' property
            return { ...userCopy, deleteError: action.error };
          }

          return user;
        })
      };
    default:
      return state
  }
}