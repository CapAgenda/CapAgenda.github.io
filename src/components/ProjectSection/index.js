import React from 'react';
import {
  ProjectWrapper,
  ProjectContainer,
  ProjectRow,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  Column1,
  Column2,
  BtnWrap,
  ImgWrap,
  Img,
  
} from './ProjectElements';
import { Button } from '../ButtonElement';

const ProjectSection = ({lightBg, id, imgStart, topLine, lightText, headline, dark, darkText, description, buttonLabel, img, alt, primary, }) => {
  return (
    <>
    <ProjectContainer lightBg={lightBg} id={id}>
      <ProjectWrapper>
        <ProjectRow imgStart={imgStart}>
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
                darkText={darkText ? 1 : 0}
                >{buttonLabel}</Button>
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={img} alt={alt} />
            </ImgWrap>
          </Column2>
        </ProjectRow>
      </ProjectWrapper>
    </ProjectContainer>
    </>
    
  )
}

export default ProjectSection