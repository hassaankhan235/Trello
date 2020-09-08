import React from 'react'
import {CardContainer} from '../styles/styles'
import { useFocus } from './UseFocus'




const hide = {
  opacity: '0'
}
const show = {
  opacity: '1'
}

interface CardProps {
    text : string
    hidden: boolean
    handleDrag() : void
    DragEnd() : void
    DragEnter(e: React.DragEvent) : void
    DragOver(e: React.DragEvent) : void
    DragDrop(e: React.DragEvent) : void
    
}

function Card({text,  hidden, handleDrag, DragEnd, DragOver,  DragEnter}: CardProps ) {
  const inpuRef = useFocus()
  
  const handle = () => {
    handleDrag()
    }
  
  
  return (
    <CardContainer style = {hidden? hide:show} 
    draggable= {true}
    ref={inpuRef} 
    onDragStart={() => handle()}
    onDragEnd = {() => DragEnd()}
    onDragOver ={(e) => DragOver(e)} 
    onDragEnter = {(e) => DragEnter(e)} 
    onDrop = {(e) => e.preventDefault()} >
        {text}
    </CardContainer>
  )
}

export default Card
