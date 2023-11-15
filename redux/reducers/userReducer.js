//Reducer
const initialState = {
  username: '',
  password: '',
};
const loggeduser = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        username: action.payload.username,
        password: action.payload.password,
      };
    default:
      return state;
  }
};

export default loggeduser;
