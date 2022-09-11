import React from 'react'
import {FaLinkedin, FaGithub } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements'

const Footer = () => {
    
    const toggleHome = () => {
        scroll.scrollToTop();
    }

  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                        <FooterLinkItems>
                        <FooterLinkTitle>MP</FooterLinkTitle>
                                <FooterLink to="/contact">Contact</FooterLink>
                                
                                
                                <FooterLink to="/home">Home</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                        <FooterLinkTitle>Projects</FooterLinkTitle>
                                <FooterLink to="/contact">Project1</FooterLink>
                                <FooterLink to="/about">Project2</FooterLink>
                                <FooterLink to="/work">Project3</FooterLink>
                               
                        </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                        <FooterLinkItems>
                        <FooterLinkTitle>About</FooterLinkTitle>
                                
                                <FooterLink to="/work">Portfolio</FooterLink>
                                <FooterLink to="/resume">Resume / CV</FooterLink>
                                
                        </FooterLinkItems>
                        <FooterLinkItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                                {<FooterLink to="/contact">LinkedIn</FooterLink>}
                                {<FooterLink to="/contact">GitHub</FooterLink>}
                                
                        </FooterLinkItems>
                </FooterLinksWrapper>
             </FooterLinksContainer>
             <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}>
                        MP
                    </SocialLogo>
                    <WebsiteRights>MP © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="//www.linkedin.com/in/matthewspeterson/" target="_blank" aria-label="LinkedIn">
                            <FaLinkedin />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="GitHub">
                            <FaGithub />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
             </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer