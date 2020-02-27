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
    console.log()
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
    </DragDropContext>
  );
  }
}
const mapStateToProps = state => ({
  lists:state.lists
})
export default connect(mapStateToProps)(App);
