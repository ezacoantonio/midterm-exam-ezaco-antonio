
import React from 'react';
import { useForm } from 'react-hook-form';
import './signupuser.css'; 

function SignUpUser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const password = watch("password", "");

  const onSubmit = (data) => {
    alert(
        `First Name: ${data.firstName}, 
         Last Name: ${data.lastName},
         Username: ${data.userName},
         Email: ${data.email}, 
         Password: ${data.password}`
    );
    console.log('===========SIGN UP DATA==========');
    console.log('First Name: ' + data.firstName);
    console.log('Last Name: ' + data.lastName);
    console.log('Username: ' + data.userName);
    console.log('Email: ' + data.email);
    console.log('Password: ' + data.password);
    console.log('=================================');
  };
  

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="signup">
        <h1 className="signup__title">Sign Up</h1>
      <label className="signup__text">First Name</label>
      <input
        type="text"
        className="signup__input"
        {...register("firstName", { required: true })}
      />
      {errors.firstName && <p className="signup__error">First Name is required</p>}

      <label className="signup__text">Last Name</label>
      <input
        type="text"
        className="signup__input"
        {...register("lastName", { required: true })}
      />
      {errors.lastName && <p className="signup__error">Last Name is required</p>}

      <label className="signup__text">Username</label>
      <input
        type="text"
        className="signup__input"
        {...register("userName", { required: true })}
      />
      {errors.userName && <p className="signup__error">Username is required</p>}

      <label className="signup__text">Email</label>
      <input
        type="email"
        className="signup__input"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      {errors.email && <p className="signup__error">Email is required and must be valid</p>}

      <label className="signup__text">Password</label>
      <input
        type="password"
        className="signup__input"
        {...register("password", { required: true })}
      />
      {errors.password && <p className="signup__error">Password is required</p>}

      <label className="signup__text">Confirm Password</label>
      <input
        type="password"
        className="signup__input"
        {...register("confirmPassword", { required: true, validate: value => value === password })}
      />
      {errors.confirmPassword && <p className="signup__error">Passwords must match</p>}

      <button className="signup__button" type="submit">
        Submit
      </button>
    </form>
  );
}

export default SignUpUser;
