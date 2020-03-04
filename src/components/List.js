import React,{useState} from 'react'
import Card from './Card'
import styled from 'styled-components'
import { Droppable } from 'react-beautiful-dnd'
import {connect} from 'react-redux'
import AddCardButton from './AddCardButton'

function List({list,dispatch}) {
    const [isVisible,setIsVisible]=useState(false);
    
    const addCard =(title,text)=>{
        setIsVisible(!isVisible)
        if(isVisible){
            dispatch({
                type:"ADD_CARD",
                payload:{
                title:title,
                text:text
                }
            })
        }
    }
    return (
        <ListContainer>
            <ListTitle>{list.title}</ListTitle>
            <Droppable droppableId={String(list.id)}>
                {provided=>(
                    <CardsContainer
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {list.cards.map((card,index)=>(
                            <Card key={index} card={card} index={index}/>
                        ))}
                        {provided.placeholder}
                    </CardsContainer>
                )}
            </Droppable>
            {list.id === 0 
                ?
                <AddCardButton
                    isVisible={isVisible}
                    setIsVisible={setIsVisible}
                    addCard={addCard}
                />
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
    color:#fff;
    text-align:center;
    background:#3a3a3a;
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    min-height:50px;
    border-radius:5px;
    box-shadow:0 1px 2px #000;
`
const CardsContainer = styled.div`
    width:100%;
    position: relative;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    margin:5px 0;
    min-height:55px;
`