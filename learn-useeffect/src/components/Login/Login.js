import React, {useReducer, useState} from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';


const emailReducer = (state, action) => {

 if(action.type === "USER_EMAIL"){
      return {value: action.value, isValid: action.value.includes('@') }
 }

 if(action.type === "INPUT_BLUR"){
  return {value: state.value, isValid: state.value.includes('@') }
}

return {value:'', isValid: true};
}

const collegeReducer = (state, action) => {
  if(action.type === "COLLEGE_INPUT"){
    return {value: action.value, isValid: action.value.trim().length > 1}
  }
  if(action.type === "INPUT_BLUR"){
    return {value: state.value, isValid: state.value.trim().length > 1}
  }
  
  return {value:'', isValid: true};
}

const passwordReducer = (state, action) => {
  if(action.type === "PASS_INPUT"){
    return {value: action.value, isValid: action.value.trim().length > 6}
  }
  if(action.type === "INPUT_BLUR"){
    return {value: state.value, isValid: state.value.trim().length > 6}
  }
  
  return {value:'', isValid: true};
}

const Login = (props) => {

  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: true
  })

   const [collegeState, dispatchCollege] = useReducer(collegeReducer, {
    value: '',
    isValid: true
  })

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: true
  })




  // useEffect(() => {

  //   const identifier = setTimeout(() => {
  //       setFormIsValid(
  //           emailState.value.includes('@') && enteredPassword.trim().length > 6 && college.trim().length > 1
  //         );
  //   },500);

  //   return () => {
  //       clearTimeout(identifier);
  //   }
 
  // },[emailState.value, enteredPassword, college]);

  const emailChangeHandler = (event) => {
    dispatchEmail({type:"USER_EMAIL", value: event.target.value});
  };

  const collegeChangeHandler = (event) => {
    dispatchCollege({type:"COLLEGE_INPUT", value: event.target.value});
  }

  const passwordChangeHandler = (event) => {
    dispatchPassword({type:"PASS_INPUT", value: event.target.value});
  };

  const validateEmailHandler = () => {
    dispatchEmail({type: "INPUT_BLUR"});
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type: "INPUT_BLUR"});
  };

  const validateCollegeHandler = () => {
    dispatchCollege({type: "INPUT_BLUR"});
  }

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value,collegeState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        
        <div
          className={`${classes.control} ${
           collegeState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="college">College</label>
          <input
            type="text"
            id="college"
            value={collegeState.value}
            onChange={collegeChangeHandler}
            onBlur={validateCollegeHandler}
          />
        </div>

        <div
          className={`${classes.control} ${
            passwordState.IsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;