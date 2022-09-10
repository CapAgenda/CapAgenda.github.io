import React from 'react'
import {    
    HighlightsCard,
    HighlightsH2,
    HighlightsP,
    HighlightsIcon} from './HighlightElements'


const HighlightCard = ({id, topLine, description, buttonLabel, img, alt}) => {
  return (
    <HighlightsCard id={id}>
        <HighlightsIcon src={img} alt={alt}/>
        <HighlightsH2>{topLine}</HighlightsH2>
        <HighlightsP>{description}</HighlightsP>
    </HighlightsCard>
  )
}

export default HighlightCard