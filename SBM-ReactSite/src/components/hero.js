import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components'

const Container = styled.div`
background: url(${props => props.image});
height: 920px;
background-size: cover;
background-position: center;
background-color: #000;

@media (max-width: 640px) {
    height: auto;
}
`

const HeroTitle = styled.h1`
margin: 0;
color: #fff;
font-size: 60px;
line-height: 1.2;
text-align:left;
opacity: 0;
animation: HeroAnimation 3s 0.1s forwards cubic-bezier(0.2, 0.8, 0.2, 1);

@keyframes HeroAnimation {
  0% {
      opacity: 0;
      transform: translateY(20px)
  }
  100% {
      opacity: 1;
      transform: translateY(0px)
  }
}

@media (max-width: 640px) {
  font-size: 40px;
}
`
const HeroCopy = styled.p`
font-size: 30px;
line-height: 1.5;
color: rgba(255,255,255, 0.8);
text-align:left;
opacity: 0;
animation: HeroAnimation 3s 0.1s forwards cubic-bezier(0.2, 0.8, 0.2, 1);

@keyframes HeroAnimation {
  0% {
      opacity: 0;
      transform: translateY(20px)
  }
  100% {
      opacity: 1;
      transform: translateY(0px)
  }
}

@media (max-width: 640px) {
  font-size: 20px;
}
`
const HeroLink = styled.a`
font-size: 17px;
font-weight: 600;
color: white;
text-transform: uppercase;
background: rgba(0,0,0,0.7);
padding: 9px 20px;
border: 1px solid rgba(255,255,255, 0.25);
border-radius: 20px;

&:hover{
  background: #fff;
  color: #000;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1.0);
}
`
const HeroGroup = styled.div`
margin:0 auto;
max-width: 500px;
padding: 150px 50px;
text-align: center;
`


const Hero = props => (
  <Container image={props.image}>
<HeroGroup>
  <HeroTitle>September’s offering is an El Penon from Nicaragua’s La Bastilla Estate.</HeroTitle>
<HeroCopy>El Penon is a nice soft-bean coffee at a time when fresh Brazils are quite scarce. Dark sugar sweetness offset by roasted almond and walnut notes, and a nice bittering bakers cocoa finish.</HeroCopy>
    <Link to="/"><HeroLink>Learn More</HeroLink></Link>
</HeroGroup>
</Container>
)

export default Hero
