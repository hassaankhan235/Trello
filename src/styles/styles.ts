import styled from 'styled-components'

export const AppContainer = styled.div`
align-items: flex-start;
background-color: #3179ba;
display: flex;
flex-direction: row;
height: auto;
padding: 20px;
width: 100%;
`

export const ColumnContainer = styled.div`
background-color : green;
width : 300px;
min-height : 40px;
padding: 8px 8px;
margin-right: 20px;
flex-grow : 0;
`

export const ColumnTitle = styled.div`
padding: 6px 16px 12px;
font-weight: bold;
`

export const CardContainer = styled.div`
background-color : #fff;
max-width: 300px;
padding: 0.5rem 1rem;
margin-bottom: 0.5rem;
border-radius: 3px;
box-shadow:  #091e4240 0px 1px 0px 0px;
`

export const NewItemButton = styled.button`
background-color: #5aac44;
border-radius: 3px;
border: none;
box-shadow: none;
color: #fff;
padding: 6px 12px;
text-align: center;
`

interface AddItemButtonProps {
    dark? : boolean;
}

export const AddItemButton = styled.button<AddItemButtonProps>`
background-color: #ffffff3d;
border-radius: 3px;
border: none;
color: ${props => (props.dark ? "#000" : "#fff")};
cursor: pointer;
max-width: 300px;
padding: 10px 12px;
text-align: left;
transition: background 85ms ease-in;
width: 100%;
&:hover {
background-color: #ffffff52;
}
`

interface NewItemInputProps{
    red? : boolean;
}

export const NewItemInput = styled.input<NewItemInputProps>`
/* background-color: ${(props) => (props.red ? 'red' : 'green')} ; */
border-radius: 3px;
border: none;
box-shadow: #091e4240 0px 1px 0px 0px;
margin-bottom: 0.5rem;
padding: 0.5rem 1rem;
width: 100%;
`

export const NewItemFormContainer = styled.div`
max-width: 300px;
display: flex;
flex-direction: column;
width: 100%;
align-items: flex-start;
`
