import {useState} from 'react'
import {Card,CardHeader,CardContent} from "@mui/material"
import {DragDropContext,Droppable,Draggable} from 'react-beautiful-dnd'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const arrayInfos =[
  {
    name:"gunalan",
    age:12,
    phone:"5375634525"
  },
  {
    name:"guna",
    age:43,
    phone:"35636524245"
  },
  {
    name:"gsk",
    age:23,
    phone:"34653463564"
  },
  {
    name:"aergerg",
    age:34,
    phone:"365745747433"
  }
]

function App() {
  const [arrayInfo, updatearrayInfo] = useState(arrayInfos);


  const handleOnDraggable = (result,provided)=>{
    console.log('result',result);
   const items = arrayInfo
   const reorderedItem = items.splice(result.source.index,1);
   items.splice(result.destination.index,0,reorderedItem[0])

   updatearrayInfo(items)
   
   toast(`${result.source.index} is moved to ${result.destination.index}`)
  }

  return (
   <div>
    <DragDropContext onDragEnd={handleOnDraggable} >
      <Droppable droppableId="names">
        {(provided)=> (
    <ul {...provided.droppableProps} ref={provided.innerRef}>
    {
      arrayInfo.map(({name,age,phone},index)=>{
       return (
        <Draggable key={name} draggableId={name} index={index}>
          {(provided)=>(
        <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}  aria-roledescription="Draggable item">
          <Card variant="outlined" >
            <CardHeader title={name}/>
            <CardContent>age : {age}</CardContent>
            <CardContent>phone : {phone}</CardContent>
          </Card>
        </li>
        )}
        </Draggable>
       )
      })
    }
    {provided.placeholder}
    </ul>
    )}
    </Droppable>
    </DragDropContext>
    <ToastContainer theme='dark'  />
    <footer>footer....</footer>
   </div>
  );
}

export default App;
