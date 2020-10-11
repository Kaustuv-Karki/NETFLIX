import React, { useState, useContext } from 'react'
import { HeaderContainer } from '../containers/header'
import { FooterContainer } from '../containers/footer'
import { Form } from '../components'
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
    }

    return (
        <div>
            
        </div>
    )
}
