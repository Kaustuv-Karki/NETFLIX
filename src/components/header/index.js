import React from 'react'
import { Background, Container, Button, Logo} from './styles/header'
import { Link as ReactRouterLink } from 'react-router-dom'

export default function Header({ bg= true, children, ...restProps}){
    return bg ? <Background {...restProps}>{children}</Background> : children
}

Header.Frame = function HeaderFrame({ children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

Header.Button = function HeaderButton({ children, ...restProps}){
    return <Button {...restProps}>{children}</Button>
}

Header.Logo = function HeaderLogo({ children, ...restProps}){
    return (
        <ReactRouterLink to="/">
            <Logo {...restProps}/>
        </ReactRouterLink>
    )
}