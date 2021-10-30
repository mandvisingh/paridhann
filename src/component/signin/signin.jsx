import { useState } from "react";
import FormInput from "../form-input/formInput";
import CustomButton from '../custom-button/customButton';

const Signin = () => {
const [emailaddress, setEmailAddress] = useState('');
const [password, setPassword] = useState('');

const handleSubmit = (event)=>{
    console.log('i am here')
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
    <CustomButton children='Sign in' type='submit'/>
</form>
    </div>
)
}

export default Signin;