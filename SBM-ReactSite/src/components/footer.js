import React from 'react'
import styled from 'styled-components'


let FooterGroup = styled.div`
    background: #F1F3F5;
    padding: 50px 0;
    display: grid;
    grid-gap: 20px;
`

const Text = styled.p`
    font-size: 24px;
    font-weight: 600;
    color: #302319;
    max-width: 500px;
    margin: 0 auto;

    @media (max-width: 640px) {
      max-width: 250px;
      text-align: center;
    }
`

const Button = styled.button`
    font-size: 24px;
    color: white;
    text-transform: uppercase;
    background: rgba(0,0,0,0.7);
    border: none;
    padding: 16px 60px;
    font-weight: 600;
    /* background: linear-gradient(102.24deg, #9B51E0 0%, #3436E7 100%); */
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
    border-radius: 30px;
    justify-self: center;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

    &:hover{
      background: #fff;
      color: #000;
      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1.0);
    }
`

let LinkGroup = styled.div`
    max-width: 500px;
    margin: 50px auto;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 10px;




    a {
        color: #302319;
        font-size: 20px;
        font-weight: 500;
        margin: 5px 0;
        transition: 1s;
    }

    a:hover {
        color: black;
    }
`
const Copyright = styled.div`
    color: #302319
    max-width: 500px;
    margin: 0 auto;
    padding: 0 20px;

    @media (max-width: 640px) {
      max-width: 250px;
      text-align: center;
    }
`



const Footer = props => (
  <footer>



    <FooterGroup>
    <Text>Follow @SBMCoffee for release updates</Text>
    <Button>Follow</Button>
    <LinkGroup>
    <a href="https://www.gatsbyjs.org">Built with Gatsby</a>
    </LinkGroup>
    <Copyright>  © {new Date().getFullYear()} Small But Mighty Coffee</Copyright>
</FooterGroup>
  </footer>

)


export default Footer
