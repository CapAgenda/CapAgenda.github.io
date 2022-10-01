import React, { useState } from 'react'
import Modal from '../Modal'
import data from '../../projectData'

import {    
    HighlightsCard,
    HighlightsH2,
    HighlightsP,
    Details,
    HighlightsIcon} from './HighlightElements'


const HighlightCard = () => {
  
  const [showModal, setShowModal] = useState(false)
  const [modalData, setModalData] = useState([])

  const openModal = () => {
    setShowModal(prev => !prev)
  }

  const getData = (id, topLine, description, buttonLabel, img, alt, title, bigdesc, tech, bigimg, liveproject, githubrepo) => {
    let projData = [id, topLine, description, buttonLabel, img, alt, title, bigdesc, tech, bigimg, liveproject, githubrepo];
    setModalData(item => [1, ...projData])
    console.log(projData)
    openModal()
  }
  
  return (
    <>
      { 
        data.projectData.map((item, index) => {
          return (
          <>
            <HighlightsCard key={index}  onClick={() => getData(item.id, item.topLine, item.description, item.buttonLabel, item.img, item.alt, item.title, item.bigdesc, item.tech, item.bigimg, item.liveproject, item.githubrepo)}>
              <HighlightsIcon src={item.img} alt={item.alt}/>
              <HighlightsH2>{item.topLine}</HighlightsH2>
              <HighlightsP>{item.description}</HighlightsP>
              <Details>{item.buttonLabel}</Details>
            </HighlightsCard>
          </>
                )
              })
      }
          <Modal showModal={showModal} setShowModal={setShowModal}
          title={modalData[7]}
          bigimg={modalData[10]}
          topLine={modalData[2]}
          alt={modalData[6]}
          description={modalData[3]}
          bigdesc={modalData[8]}
          tech={modalData[9]}
          liveproject={modalData[11]}
          githubrepo={modalData[12]}

          />
    </>
  )
}

export default HighlightCard