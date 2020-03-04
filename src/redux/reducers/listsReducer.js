import {MOVE_CARD,ADD_CARD} from '../actions/listsActions'
const initialState=[
    {
      id:0,
      title:'To do',
      cards:[
        {
          id:0,
          title:"Card 0",
          text:"Card 0 text"
        },
        {
          id:1,
          title:"Card 1",
          text:"Card 1 text"
        }
      ]
    },
    {
      id:1,
      title:'In progress',
      cards:[
        {
          id:2,
          title:"Card 2",
          text:"Card 2 text"
        }
      ]
    },
    {
      id:2,
      title:"Done",
      cards:[]
    }
]
let cardId = 3;
const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD:{
      const {title, text} = action.payload;
      let obj = {
        id:cardId++,
        title:title,
        text:text
      }
      state[0].cards.push(obj)
      return state
    }
    case MOVE_CARD:{
      const {source,destination} = action.payload;
      // console.log("source",source)
      // console.log("destination",destination)
      let newState = state;
      if(destination){
        //TA SAMA KOLUMNA
        if(source.droppableId === destination.droppableId){
          let column = newState[parseInt(source.droppableId)]
          let card = column.cards.splice(source.index,1)
          column.cards.splice(destination.index,0,...card)

          return newState;
        }
        //INNA KOLUMNA
        else{
          let fromColumn = state[parseInt(source.droppableId)];
          let toColumn = state[parseInt(destination.droppableId)];
          let card = fromColumn.cards.splice(source.index,1)
          toColumn.cards.splice(destination.index,0,...card)
          return state
        }
      }
      return state
    }
    default:
      return state
  }
}
export default listsReducer