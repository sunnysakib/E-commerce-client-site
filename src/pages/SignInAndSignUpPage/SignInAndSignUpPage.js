import React from 'react';
import SignIn from '../../component/SignIn/SignIn';
import SignUp from '../../component/SignUp/SignUp';
import './SignInAndSignUpPage.scss'

const SignInAndSignUpPage = () => {
    return (
        <div className="signIn-signUp-page">
            <SignIn/>
            <SignUp/>
        </div>
    );
};

export default SignInAndSignUpPage;