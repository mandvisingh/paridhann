import { useState } from "react";
import FormInput from "../form-input/formInput";
import CustomButton from '../custom-button/customButton';
import { signInWithGoogle } from "../../firebase/firebase-util";
import './styles.scss';

const Signin = () => {
const [emailaddress, setEmailAddress] = useState('');
const [password, setPassword] = useState('');

const handleSubmit = (event)=>{
    event.preventDefault();
        setEmailAddress('')
        setPassword('')
    }

const handleChange = (event) =>{
const {value, name} = event.target;
if(name === 'emailaddress')
    setEmailAddress(value)
else
setPassword(value)
}

return(
    <div className='sign-in'>
<h2>I already have an account</h2>
<span>Sign in with your email and password</span>
<form onSubmit={()=>handleSubmit()}>
    <FormInput type="email" name="emailaddress" value={emailaddress} required handleChange={(e)=>handleChange(e)} label="Email"/>
    <FormInput type="password" name="password" value={password} required handleChange={(e)=>handleChange(e)} label="Password"/>
    <div className='buttons'>
    <CustomButton children='Sign in' type='submit'/>
    <CustomButton onClick={signInWithGoogle} isGoogleSignin children='Sign in with Google'/>
    </div>
</form>
    </div>
)
}

export default Signin;