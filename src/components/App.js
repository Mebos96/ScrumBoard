import React from 'react';
import {connect} from 'react-redux'
import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components'
import List from './List'
import Navbar from './Navbar';

const ListsContainer = styled.div`
  width:100%;
  display:flex;
  flex-wrap:wrap;
  min-height:100px
`
const Hint =styled.div`
  background:rgba(0,0,0,0.7);
  color:#fff;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  position:absolute;
  width:100%;
  bottom:20px;
`
class App extends React.Component {

  onDragEnd = result => {
    this.props.dispatch({
      type:"MOVE_CARD",
      payload:{
        source:result.source,
        destination:result.destination
      }
    })
  };
  render(){
    return (
    <DragDropContext
      onDragEnd={this.onDragEnd}
    >
      <Navbar/>
      <ListsContainer>
        {this.props.lists.map(list=>(
          <List key={list.id} list={list}/>
        ))}
      </ListsContainer>
      <Hint>
        <h2>Porada na dzisiaj!</h2>
        <h3>Jeśli chcesz utworzyć nową tablice z innej tablicy, eliminując podtablice, używaj metody wbudowanej flat</h3>
      </Hint>
    </DragDropContext>
  );
  }
}
const mapStateToProps = state => ({
  lists:state.lists
})
export default connect(mapStateToProps)(App);
