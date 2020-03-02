import React,{useState} from 'react'
import Card from './Card'
import styled from 'styled-components'
import { Droppable } from 'react-beautiful-dnd'
import {connect} from 'react-redux'

function List({list,dispatch}) {
    const [title,setTitle]=useState('')
    const [text,setText]=useState('')
    const [isVisible,setIsVisible]=useState(false)

    const addCard =()=>{
        setIsVisible(!isVisible)
        if(isVisible === true){
            dispatch({
                type:"ADD_CARD",
                payload:{
                title:title,
                text:text
                }
            })
            setTitle("")
            setText("")
        }
    }

    return (
        <ListContainer key={list.id} cardsAmount={list.cards.length}>
            <ListTitle>{list.title}</ListTitle>
            <Droppable droppableId={String(list.id)}>
                {(provided)=>(
                    <CardsContainer
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {list.cards.map((card,index)=>(
                            <Card key={card.id} card={card} index={index}/>
                        ))}
                        {provided.placeholder}
                    </CardsContainer>
                )}
            </Droppable>
            {list.id === 0 
                ?
                <React.Fragment>
                    <AddCardForm visible={isVisible}>
                        <TitleInput
                            placeholder="Title"
                            value={title}
                            onChange={(e)=>setTitle(e.target.value)}
                        />
                        <TextInput
                            placeholder="Text"
                            value={text}
                            onChange={(e)=>setText(e.target.value)}
                        />
                    </AddCardForm>
                    <Buttons>
                        <AddCardButton onClick={addCard} visible={isVisible}>
                            <AddCardButtonText>
                                Add task
                            </AddCardButtonText>
                        </AddCardButton>
                        <CloseButton onClick={()=>setIsVisible(!isVisible)} visible={isVisible}>
                            ✕
                        </CloseButton>
                    </Buttons>
                </React.Fragment>
                :null
            }
            
        </ListContainer>
    )
}
export default connect()(List);
const ListContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    background:#999;
    border-radius:5px;
    width:250px;
    margin:10px;
    position: relative;
    min-height:110px;
    height:100%;
    box-shadow: 3px 3px 7px #444;
`
const ListTitle = styled.h2`
    padding:10px 5px;
    color:#fff;
    text-align:center
`
const CardsContainer = styled.div`
    width:100%;
    position: relative;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    margin:5px 0;
`
const Buttons = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
`
const AddCardButton = styled.button`
    width: ${props => {
        if(props.visible === true) return "85%"
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
const AddCardButtonText = styled.h3`
    color:#fff;
    margin:5px
`
const AddCardForm = styled.div`
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