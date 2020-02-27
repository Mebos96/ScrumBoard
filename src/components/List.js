import React,{useState} from 'react'
import Card from './Card'
import styled from 'styled-components'
import { Droppable } from 'react-beautiful-dnd'

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
const AddCardButton = styled.button`
    width:95%;
    margin:5px;
    border-radius:5px;
    background:#4cd137;
    border:none;
    cursor: pointer;
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

`
const TextInput = styled.textarea`

`
export default function List({list}) {
    const [title,setTitle]=useState('')
    const [text,setText]=useState('')
    const [isVisible,setIsVisible]=useState(true)

    const addCard =()=>{
        setIsVisible(!isVisible)
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
                            value={title}
                            onChange={title=> console.log(title)}
                        />
                        <TextInput
                            value={text}
                            onChange={(text)=>console.log(text)}
                        />
                    </AddCardForm>
                    <AddCardButton onClick={addCard}>
                        <AddCardButtonText>
                            Add task
                        </AddCardButtonText>
                    </AddCardButton>
                </React.Fragment>
                :null
            }
            
        </ListContainer>
    )
}
