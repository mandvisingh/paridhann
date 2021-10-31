import { useState } from 'react';
import CustomButton from '../custom-button/customButton';
import FormInput from '../form-input/formInput';
import { auth, createUserProfileDocument } from '../../firebase/firebase-util';

import './styles.scss';

const SignUp = () => {
const [userData, setUserData] = useState({
    displayName: '',
emailaddress: '',
password: '',
confirmpassword: ''});

const handleSubmit = async(event)=>{
    const {displayName, emailaddress, password, confirmpassword} = userData;
    event.preventDefault();
    
    if(password !== confirmpassword){
        alert('Passwords do not match');
        return;
    }

    try {
        const {user} = await auth.createUserWithEmailAndPassword(emailaddress, password);
 await createUserProfileDocument(user, {displayName})

        setUserData({
            displayName: '',
        emailaddress: '',
        password: '',
        confirmpassword: ''});
        
    } catch (error) {
        
    }
    }

const handleChange = (event) =>{
const {value, name} = event.target;
setUserData({
    ...userData,
    [name] : value
})
}

    return(
        <div className='sign-up'>
        <h2>I don't have an accout</h2>
        <span>Let's get you signed up</span>
        <form onSubmit={ handleSubmit}>
        <FormInput type="text" name="displayName" value={userData.displayName} required handleChange={(e)=>handleChange(e)} label="Display Name"/>
            <FormInput type="email" name="emailaddress" value={userData.emailaddress} required handleChange={(e)=>handleChange(e)} label="Email"/>
            <FormInput type="password" name="password" value={userData.password} required handleChange={(e)=>handleChange(e)} label="Password"/>
            <FormInput type="password" name="confirmpassword" value={userData.confirmpassword} required handleChange={(e)=>handleChange(e)} label="Confirm Password"/>
            <div className='buttons'>
            <CustomButton children='Sign Up' type='submit'/>
            </div>
        </form>
            </div>
    )
}

export default SignUp;