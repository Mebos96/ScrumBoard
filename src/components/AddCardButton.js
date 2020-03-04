import React,{useState} from 'react'
import styled from 'styled-components'

export default function AddCardButton({isVisible,setIsVisible,addCard}){
    const [title,setTitle]=useState('');
    const [text,setText]=useState('');
    const add=()=>{
        setIsVisible(!isVisible)
        addCard(title,text)
        setTitle('')
        setText('')
    }
    return (
        <React.Fragment>
            <Form visible={isVisible}>
                <TitleInput
                    placeholder="Title"
                    value={title}
                    onChange={e=>setTitle(e.target.value)}
                />
                <TextInput
                    placeholder="Text"
                    value={text}
                    onChange={e=>setText(e.target.value)}
                />
            </Form>
            <Buttons>
                <Button onClick={add} visible={isVisible}>
                    <ButtonText>
                        Add task
                    </ButtonText>
                </Button>
                <CloseButton onClick={()=>setIsVisible(!isVisible)} visible={isVisible}>
                    ✕
                </CloseButton>
            </Buttons>
        </React.Fragment>
    )
}
const Buttons = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
`
const Button = styled.button`
    width: ${({visible}) => {
        if(visible === true) return "85%"
        else return "95%"
    }};
    margin:5px;
    border-radius:5px;
    background:#4cd137;
    border:none;
    cursor: pointer;
    outline:none;
    &:active{
        background:#3bc026
    }
`
const CloseButton = styled.p`
    display: ${props => {
        if(props.visible === true) return "block"
        else return "none"
    }};
    padding:5px;
    font-weight:bold;
    cursor: pointer;
    color:#333
`
const ButtonText = styled.h3`
    color:#fff;
    margin:5px
`
const Form = styled.div`
    display: ${props => {
        if(props.visible ===true) return "flex"
        else return "none"
    }};
    flex-direction: column;
    width:95%;
`
const TitleInput = styled.input`
    margin:2px;
    height:20px;
    outline:none;
    &::placeholder{
        padding:0 3px
    }
`
const TextInput = styled.textarea`
    margin:2px;
    min-height:50px;
    resize:none;
    outline:none;
    &::placeholder{
        padding:0 3px
    }
    
`