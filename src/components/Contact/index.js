import React, {useState} from 'react'

import {
    ContactContainer,
    ContactWrap,
    ContactRow,
    ColumnL,
    ContactTopLine,
    ContactP,
    ColumnR,
    TextWrapper,
    ContactForm,
    ContactInput,
    NameInput,
    ContactTextarea,
    ContactBtn
} from './ContactElements'

const FORM_ENDPOINT = ""; // TODO - fill on the later step

const Contact = () => {

    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
        setTimeout(() => {
        setSubmitted(true);
        }, 100);
    };

    if (submitted) {
        return (
        <>
        <ContactContainer id="contact">
        <ContactWrap>
            <ContactRow>
                <ColumnL>
                    <TextWrapper>
                    <ContactTopLine>Contact</ContactTopLine>
                    <ContactP>Please feel free to reach out to me using this form or on LinkedIn. I look forward to hearing from you.</ContactP>
                    </TextWrapper>
                </ColumnL>
                <ColumnR>
                <TextWrapper>
                <ContactTopLine>Thank you!</ContactTopLine>
                <ContactP>I'll be in touch soon.</ContactP>
            </TextWrapper>
            </ColumnR>
            </ContactRow>
        </ContactWrap>
    </ContactContainer>
        </>
        );
    }


    return (
    <ContactContainer id="contact">
        <ContactWrap>
            <ContactRow>
                <ColumnL>
                    <TextWrapper>
                    <ContactTopLine>Contact</ContactTopLine>
                    <ContactP>Please feel free to reach out to me using this form or on LinkedIn. I look forward to hearing from you.</ContactP>
                    </TextWrapper>
                </ColumnL>
                <ColumnR>
                  <ContactForm  action={FORM_ENDPOINT}
                                onSubmit={handleSubmit}
                                method="POST"
                                target="_blank">
                  <NameInput type="input" className="form-field" id="name" placeholder="Name"  required />
                  <ContactInput type="email" id="email" placeholder="Email"  required></ContactInput>
                  <ContactTextarea type="text" id="msg" rows="5" placeholder="Message"  required></ContactTextarea>
                  <ContactBtn type="submit" value="Send" className="send-btn"/>
                  </ContactForm>
                    
                </ColumnR>
            </ContactRow>
        </ContactWrap>
    </ContactContainer>
    )
}

export default Contact