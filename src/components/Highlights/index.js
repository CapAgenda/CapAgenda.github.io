import React from 'react';
import HighlightCard from './HighlightCard';
import { projectOne, projectTwo, projectThree } from './HighlightData'

import {
    HighlightsH1,
    HighlightsContainer,
    HighlightsWrapper,
} from './HighlightElements'

const Highlights = () => {
  return (
   <>
   <HighlightsContainer id="work">
        <HighlightsH1>Project Development Process</HighlightsH1>
        <HighlightsWrapper >
            <HighlightCard {...projectOne} />
            <HighlightCard {...projectTwo} />
            <HighlightCard {...projectThree} /> 
        </HighlightsWrapper>
   </HighlightsContainer>
   </>
  )
}

export default Highlights