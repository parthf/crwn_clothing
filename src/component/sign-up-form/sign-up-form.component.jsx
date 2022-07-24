import { useState, useContext } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { UserContext } from "../context/user.context";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../Utils/firebase/firebase.utils";
import './sign-up-form.styles.scss';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    console.log(formFields);
    
    const { setCurrentUser } = useContext(UserContext);
    
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    };



    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

   
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            setCurrentUser(user);
            // console.log(user);
            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();
            setCurrentUser(user);
        } 
        
    
        catch (error) {
            if(error.code = 'auth/email-already-in-use') {
                alert('Cannot create user, email is already in use');
            }
            else{

                console.log('user has created an error', error);
            }
        }
    }

    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign Up with Email and Password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Display Name' type='text' required onChange={handleChange} name='displayName' value={displayName} />

                <FormInput label='Email' type='email' required onChange={handleChange} name='email' value={email} />

        
                <FormInput label='Password' type='password' required onChange={handleChange} name='password' value={password} />
                <FormInput label='Confirm Password' type='password' required onChange={handleChange} name='confirmPassword' value={confirmPassword} />
                <Button buttonType='' type='submit'>Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm;