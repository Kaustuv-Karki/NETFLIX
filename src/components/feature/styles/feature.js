import styled from 'styled-components/macro'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    text-align: center;
    border-bottom: 8px solid #222;
    padding: 165px 45px;    
`

export const Title = styled.h1`
    max-width: 640px;
    font-size: 50px;
    font-weight: 500;
    margin: auto;

    @media(max-width: 600px){
        font-size: 35px;
    }
`

export const SubTitle = styled.h2`
    font-size: 26px;
    margin: 16px auto;
    font-weight: normal;

    @media (max-width: 600px){
        font-size: 18px;
    }
`