import React, { useState, useContext } from 'react'
import { HeaderContainer } from '../containers/header'
import { FooterContainer } from '../containers/footer'
import { Form, Header } from '../components'
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase'
import * as ROUTES from '../constants/routes'

export default function SignUp() {
    const history = useHistory()
    const { firebase } = useContext(FirebaseContext)

    const [ firstName, setFirstName ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ emailAddress, setEmailAddress ] = useState('')
    const [ error, setError ] = useState('')

    const isInvalid = firstName === ''  || password === '' || emailAddress === ''

    const handleSignUp = (event) => {
        event.preventDefault();
        return firebase
            .auth()
            .createUserWithEmailAndPassword( emailAddress, password)
            .then((result) => {
                result.user
                    .updateProfile({
                        displayName: firstName,
                        photoURL: Math.floor(Math.random() * 5) + 1,
                    })
                    .then(() => {
                        history.push(ROUTES.BROWSE);
                    })
            })
            .catch((error) => {
                setPassword('')
                setEmailAddress('')
                setFirstName('')
                setError(error.message)
            })
    }

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign Up</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                    <Form.Base onSubmit={handleSignUp} method="POST">
                        <Form.Input 
                            placeholder="First Name"
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)}    
                        />
                        <Form.Input 
                            placeholder="Email address"
                            value={emailAddress}
                            onChange={e => setEmailAddress(e.target.value)}
                        />
                        <Form.Input
                            placeholder="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <Form.Submit disabled={isInvalid} type="submit">
                            Sign Up
                        </Form.Submit>
                    </Form.Base>
                    <Form.Text>
                        Already a user? <Form.Link to="/signin">Sign in now.</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
                    </Form.TextSmall>
                </Form>
            </HeaderContainer>
        </>
    )
}
