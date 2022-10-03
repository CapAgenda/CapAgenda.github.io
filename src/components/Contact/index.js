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


const Contact = () => {

    const FORM_ENDPOINT = "https://public.herotofu.com/v1/b1211ce0-41a5-11ed-9b17-6fdf7f94f506"; 
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
                <ContactTopLine style={{textAlign: 'center'}}>Thank you!</ContactTopLine>
                <ContactP style={{textAlign: 'center'}}>I'll be in touch soon.</ContactP>
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
                                target="_blank"
                                >
                  <NameInput type="input" name="Name" className="form-field" id="name" placeholder="Name"  required />
                  <ContactInput type="email" name="Email" id="email" placeholder="Email"  required></ContactInput>
                  <ContactTextarea type="text" id="msg" rows="5" placeholder="Message"  required></ContactTextarea>
                  <ContactBtn type="submit" name="message" value="Send" className="send-btn"/>
                  </ContactForm>
                </ColumnR>
            </ContactRow>
        </ContactWrap>
    </ContactContainer>
    )
}

export default Contact