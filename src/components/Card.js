import React from 'react'
import styled from 'styled-components'
import {Draggable} from 'react-beautiful-dnd'

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

const CardContainer = styled.div`
    background:#eee;
    width:95%;
    border-radius:3px;
    margin:3px 0;
    text-align:center;
    box-shadow:1px 1px 2px #333;
`
const CardTitle = styled.h4`
    text-align:center;
    margin:5px
`
const CardText = styled.p`
    font-size:15px;
    margin-bottom:5px
`