import React, {useState, useRef, useEffect} from 'react';
import Video from '../../video/video7.mp4';

import { Button } from '../ButtonElement';
import { 
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements'

const HeroSection = () => {

const [hover, setHover] = useState(false);

const onHover = () => {
    setHover(!hover)
}

/* Control video speed */ 
const videoRef = useRef(null);
  
useEffect(() => {
      videoRef.current.playbackRate = 0.33;
    }, []); 
/* --- */

  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg ref={videoRef} autoPlay loop muted src={Video} type='video/mp4'/>
        </HeroBg>
        <HeroContent>
            <HeroH1>Full-Stack Developer</HeroH1>
            <HeroP>
            Front-end ( e.g. React.js),<br/> Back-end (databases, cloud-native development ie. Amazon AWS)
            </HeroP>
            <HeroBtnWrapper>
                <Button 
                to="work" 
                onMouseEnter={onHover}
                onMouseLeave={onHover}
                primary="true"
                dark='false'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                >Portfolio {hover ? <ArrowForward /> : <ArrowRight/>}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
    

  )
}

export default HeroSection