import React, { PropsWithChildren } from 'react'
import {ColumnContainer, ColumnTitle} from '../styles/styles'
import AddNewItem from '../components/AddNewItem'
import { UseAppState } from '../AppStateContect'
import Card from './Card'
import {findIdByDraggedProp} from '../FinItemByIndex'


interface ColumnProps {
    text : string 
    index : number
    id: string
}

export default function Column({text, index, id} : PropsWithChildren<ColumnProps>) {
  
  const {state, dispatch} = UseAppState()

  const handle = (tid: string) => {
    setTimeout(() => dispatch({type:"DRAGGED_TASK", payload:{Cid: id, taskId: tid} }),
      0
    )
  }
  const DragEnd = (tid: string) => {
    setTimeout(() => dispatch({type:"DRAGGED_TASK_END", payload:{Cid: id, taskId: tid} }),
      0
    )
  }
  const DragDrop = (e:React.DragEvent,  Cid: string, tid: string ) => {
    dispatch({type:"DROP", payload:{e ,Cid: id, taskId: tid} })
  }


  
  return (
    <ColumnContainer  
    onDrop = {(e) => DragDrop(e, id, findIdByDraggedProp(index, state))} 
    onDragOver = {(e) => e.preventDefault() }
    onDragEnter= {(e) => e.preventDefault()} >
    <ColumnTitle> {text} </ColumnTitle>
    {state.lists[index].tasks.map((task) => {
      if(task !== null){
        return <Card text = {task?.text}  
      key = {task.id}
      hidden = {task.drag}
      handleDrag = {() => handle(task.id)}
      DragEnd = {() => DragEnd(task.id)} 
      DragOver = {(e) => e.preventDefault() }
      DragEnter= {(e) => e.preventDefault()} 
      DragDrop = {(e) => e.preventDefault()}
     />
    }
      })
      }
    <AddNewItem dark toggleButtonText= "+ Add another task" 
    onAdd= {
      (text) => {dispatch({type:"ADD_TASK", payload:{text, taskId: id}})
    }
    } />
    </ColumnContainer>
  )
}
