import React, {useState} from 'react';
import Video from '../../video/video.mp4';
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

  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1>Front-end Design and Development</HeroH1>
            <HeroP>
                Contact me for graphic and web design services.
            </HeroP>
            <HeroBtnWrapper>
                <Button 
                to="work" 
                onMouseEnter={onHover}
                onMouseLeave={onHover}
                primary="true"
                dark="true">
                    View my work {hover ? <ArrowForward /> : <ArrowRight/>}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
    

  )
}

export default HeroSection