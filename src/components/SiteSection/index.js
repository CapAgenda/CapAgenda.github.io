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
  ImgWrap,
  Img,
  
} from './SiteElements';
import { Button } from '../ButtonElement';

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
                <Button 
                to="home"
                primary={primary ? 1 : 0}
                dark={dark ? 1 : 0}
                >{buttonLabel}</Button>
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