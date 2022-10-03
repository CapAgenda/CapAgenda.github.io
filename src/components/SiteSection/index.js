import React from 'react';
import {
  SiteWrapper,
  SiteContainer,
  SiteRow,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  Column1,
  Column2,
  BtnWrap,
  LinkButton,
  ImgWrap,
  Img,
  
} from './SiteElements';


const SiteSection = ({lightBg, id, imgStart, topLine, lightText, headline, dark, darkText, description, buttonLabel, img, alt, primary, }) => {
  return (
    <>
    <SiteContainer lightBg={lightBg} id={id}>
      <SiteWrapper>
        <SiteRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading lightText={lightText}>{headline}</Heading>
              <Subtitle darkText={darkText}>{description}</Subtitle>
              <BtnWrap>
                <LinkButton 
                href="https://www.linkedin.com/in/matthewspeterson/"
                target="_blank" rel="noopener noreferrer"
                >Resume / CV</LinkButton>
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={img} alt={alt} />
            </ImgWrap>
          </Column2>
        </SiteRow>
      </SiteWrapper>
    </SiteContainer>
    </>
    
  )
}

export default SiteSection