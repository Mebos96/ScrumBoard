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
      const {title, text} = action.payload
      let obj = {
        id:cardId++,
        title:title,
        text:text
      }
      let newState = state;
      newState[0].cards.push(obj)
      return newState
    }
    case MOVE_CARD:{
      const {source,destination} = action.payload;
      console.log("source",source)
      console.log("destination",destination)
      if(destination){
        if(source.droppableId === destination.droppableId){
          // state.map(list=>{
          //   if(list.id===source.droppableId){
          //     list.cards.map((card,index)=>{

          //     }
          //   }
          // })
        }
      }
      return state
    }
    default:
      return state
  }
}
export default listsReducer