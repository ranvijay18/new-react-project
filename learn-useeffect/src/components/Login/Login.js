import React, {useReducer, useState, useEffect} from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';


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
    isValid: null
  })

   const [collegeState, dispatchCollege] = useReducer(collegeReducer, {
    value: '',
    isValid: null
  })

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null
  })




  useEffect(() => {

    const identifier = setTimeout(() => {
        setFormIsValid(
            emailState.isValid && passwordState.isValid && collegeState.isValid
          );
    },500);

    return () => {
        clearTimeout(identifier);
    }
 
  },[emailState, passwordState, collegeState]);

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
        <Input 
        id={"eamil"}
        type={"email"}
        label={"E-mail"}
        isValid={emailState.isValid}
        onChange={emailChangeHandler}
        onBlur={validateEmailHandler}
        />

        <Input 
        id={"college"}
        type={"text"}
        label={"College"}
        isValid={collegeState.isValid}
        onChange={collegeChangeHandler}
        onBlur={validateCollegeHandler}
        />
        <Input 
        id={"password"}
        type={"text"}
        label={"Password"}
        isValid={passwordState.isValid}
        onChange={passwordChangeHandler}
        onBlur={validatePasswordHandler}
        />
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