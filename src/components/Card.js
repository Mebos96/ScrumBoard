import React from 'react'
import styled from 'styled-components'
import {Draggable} from 'react-beautiful-dnd'

const CardContainer = styled.div`
    background:#eee;
    width:95%;
    border-radius:5px;
    margin:3px 0;
    text-align:center;
`
const CardTitle = styled.h4`
    text-align:center;
    margin:5px
`
const CardText = styled.p`
    font-size:15px;
`
export default function Card({card,index}) {
    return (
        <Draggable draggableId={String(card.id)} index={index}>
            {provided=>(
                <CardContainer
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <CardTitle>{card.title}</CardTitle>
                    <CardText>{card.text}</CardText>
                </CardContainer>
            )}
        </Draggable>
    )
}
