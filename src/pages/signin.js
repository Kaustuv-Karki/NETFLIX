import React, { useState, useContext } from 'react'
import { HeaderContainer } from '../containers/header'
import { FooterContainer } from '../containers/footer'
import { Form } from '../components'
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase'
import * as ROUTES from '../constants/routes'

export default function SignIn() {

    const { firebase } = useContext(FirebaseContext);
    const [ error, setError ] = useState('')
    const [ emailAddress, setEmailAddress ] = useState('')
    const [ password, setPassword ] = useState('')

    const isInvalid = password === '' || emailAddress === '';

    const handleSignIn = (event) => {
        event.preventDefault()
    }

    return (
        <>
        <HeaderContainer>Hello From SignIn
            <Form>
                <Form.Title>Sign In</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}
                <Form.Base onSubmit={handleSignIn} method="POST" >
                    <Form.Input  
                        placeholder="Email Address"
                        value={emailAddress}
                        onChange= {e => setEmailAddress(e.target.value)}
                        />
                    <Form.Input 
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        />
                    <Form.Submit  disabled={isInvalid} type="submit" data-testid="sign-in">
                        Sign In
                    </Form.Submit>
                </Form.Base>
                    <Form.Text>
                        New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
                    </Form.TextSmall>
            </Form>
        </HeaderContainer>
        <FooterContainer/>
        </>
    )
}
