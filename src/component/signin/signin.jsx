import { useState } from "react";

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
<form onSubmit={()=>handleSubmit()}
>
    <input type="email" name="emailaddress" value={emailaddress} required onChange={(e)=>handleChange(e)}/>
    <label htmlFor="emailaddress">Email</label>
    <input type="password" name="password" value={password} required onChange={(e)=>handleChange(e)}/>
    <label htmlFor="password">Password</label>
    <button type='submit'>Sign in</button>
</form>
    </div>
)
}

export default Signin;