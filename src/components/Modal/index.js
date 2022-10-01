import React, {  useRef, useCallback, useEffect } from 'react'
import {
    ModalOverlay,
    ModalContainer,
    ProjectImage,
    ModalContent,
    ProjectTitle,
    ProjectDescription,
    Subhead,
    TechUsed,
    BtnWrap,
    ProjectButton,
    Icon,
    CloseButton
} from './ModalElements'


const Modal = ({showModal, setShowModal, bigimg, title, bigdesc, alt, tech, liveproject, githubrepo}) => {

    const modalRef = useRef();  

    const hideModal = (e) => {
        if(modalRef.current === e.target) {
            setShowModal(false);
        }
    }

    const keyPress = useCallback(e => {
        if(e.key === 'Escape' && showModal) {
            setShowModal(false)
        }
    },[setShowModal, showModal])

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress)
    }, [keyPress])

    return (
        <>
        {showModal ? (
        <ModalOverlay ref={modalRef} onClick={hideModal}>
            <ModalContainer>
                <ProjectImage src={bigimg} alt={alt}/>
                <ModalContent>
                    <ProjectTitle>{title}</ProjectTitle>
                    <ProjectDescription>{bigdesc}</ProjectDescription>
                    <Subhead>Language / Technology Used</Subhead>
                    <TechUsed>{tech}</TechUsed>
                    <BtnWrap>
                    <ProjectButton href={liveproject} target="_blank" rel="noopener noreferrer">View Project</ProjectButton>
                   {/*  <ProjectButton href={githubrepo} target="_blank" rel="noopener noreferrer">View Code</ProjectButton> */}
                    </BtnWrap>
                    <Icon onClick={() => setShowModal(prev => !prev)}>
                    <CloseButton />
                    </Icon>
                </ModalContent>
            </ModalContainer>
        </ModalOverlay>
        ): null}
    </>
        )

}

export default Modal