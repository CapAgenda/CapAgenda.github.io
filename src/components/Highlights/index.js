import React from 'react'
import HighlightCard from './HighlightCard';

import {
    HighlightsH1,
    HighlightsContainer,
    HighlightsWrapper,
} from './HighlightElements'

const Highlights = () => {
  
  return (
   <>
   <HighlightsContainer id="work">
        <HighlightsH1>Portfolio Projects</HighlightsH1>
        <HighlightsWrapper >
            <HighlightCard /> 
        </HighlightsWrapper>
   </HighlightsContainer>

   </>
  )
}

export default Highlights