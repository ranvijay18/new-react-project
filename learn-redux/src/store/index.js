import { configureStore , createSlice } from '@reduxjs/toolkit'
const initialCounterState = {counter: 0 , showCounter: true};
const initialAuthState = {isAuthenticated : false};


const counterSlice = createSlice({
  name: 'counter',
  initialState:initialCounterState,
  reducers: {
    increment(state, action){
      state.counter = state.counter + action.payload;
    },
    decrement(state, action){
      state.counter = state.counter - action.payload;
    },
    toggle(state){
      state.showCounter = !state.showCounter;
    }
  }
})

const authSlice = createSlice({
  name: 'auth',
  initialState:initialAuthState,
  reducers: {
    login(state){
      state.isAuthenticated = true;
    },
    logout(state){
      state.isAuthenticated = false;
    }
  }
})




const store = configureStore({
 reducer:{ counter: counterSlice.reducer, auth: authSlice.reducer}
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;



export default store;
