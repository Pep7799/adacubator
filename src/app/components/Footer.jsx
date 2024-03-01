import styled from "styled-components"
import Image from 'next/image';
import logo from '../../../public/logo.png'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { device } from '../lib/breakpoint';






const Footer = () => {
  return (
    <FooterCont>
      <div className="footer">
        <div className="footer-left">
        <a href='/' ><Image alt='adacubator logo' src={logo}/></a>
        <FaFacebookF className="icon1" />
        <FaInstagram className="icon1"/>
        <FaXTwitter className="icon1"/>



        </div>
        <div className="footer-right">
            <h3>Quick Links</h3>
            <ul className="list">
                <li>About Us</li>
                <li>Coaches</li>
                <li>Campuses</li>
                <li>Tryouts</li>
                <li>Tournaments</li>
                <li>News</li>
            </ul>
        </div>
        </div>
        <div className="line">

        </div>
        <p>© 2024.All rights reserved</p>
    </FooterCont>
  )
}

export default Footer

const FooterCont = styled.div`
  
    & > div {
        display: flex;
        justify-content: space-between;
        margin: 3rem 8rem;
    }
    .icon1{
      margin: 0 2rem ;
      width: 1.5rem;
      height: 1.5rem;
      background-color: honeydew;
      border-radius: 50%;
      color: black;
      padding: 4px;
      font-size: 10px;
      box-shadow: 2px honeydew;
   
    }
   h3{
        background: linear-gradient(107.64deg, #0098DA -4.02%, #91D8F7 82.79%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: .5rem;
    }
   

   ul{
    list-style-type: none;
    display: flex;
    gap: 1rem;
    }

    .line {
      position: relative;
    width: auto; 
    height: 1px; 
    background-color: #E8E8E880; 
    }
    .line::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 1px; 
    background-color: #E8E8E880; 
  }
  p {
    align-items: center;
    display: flex;
    justify-content: center;
    margin-top: -1rem;
    margin-bottom: 2rem;
  }
  @media screen and (${device.md}) {
    & > div {
        display: flex;
        justify-content: space-between;
        margin: 2rem 1rem;
    }
    .icon1{
      margin: 0 1rem;
    }
    h3 {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    ul {
      font-size: .75rem;

    }
  }
  
`