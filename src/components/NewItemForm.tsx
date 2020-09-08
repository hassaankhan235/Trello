import React, {useState} from 'react'
import { NewItemButton, NewItemInput, NewItemFormContainer} from '../styles/styles'

interface NewItemFormProps {
    onAdd(text: string) : void
}

function NewItemForm(props :NewItemFormProps) {
const [text, setText] = useState('')
  return (
      <NewItemFormContainer>
          <NewItemInput red = {true} onChange={(e) => (setText(e.target.value))} />
          <NewItemButton onClick= {() => props.onAdd(text)} >
              Create
          </NewItemButton>
      </NewItemFormContainer>
  )
}

export default NewItemForm
