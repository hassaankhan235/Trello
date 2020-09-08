import React, {useState} from 'react'
import { AddItemButton } from '../styles/styles'
import NewItemForm from '../components/NewItemForm'

interface AddNewItemProps {
    dark? : boolean;
    toggleButtonText: string;
    onAdd(text: string) : void;
}

interface AddItemButtonProps {
  dark? : boolean;
}

export default function AddNewItem(props: AddNewItemProps) {
    const {dark, toggleButtonText, onAdd} = props
    const [showForm, setShowForm] = useState(false);

  if(showForm){
    return(
      <NewItemForm onAdd = {(text)=> {
        onAdd(text)
        setShowForm(false)
      } } />
    )
  }
  return (
    < AddItemButton dark = {dark} onClick = {() => setShowForm(true)}>
    {toggleButtonText}
    </AddItemButton>
  )
}