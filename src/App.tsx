import React from "react";
import "./App.css";
import Column from "./components/Column";
import { AppContainer } from "./styles/styles";
import AddNewItem  from './components/AddNewItem'
import { UseAppState } from './AppStateContect'





const App = () => {

 
    const {state, dispatch}  = UseAppState()

  return (
    <div className="App">
      <AppContainer>
        <div> TRELLO </div>
        {
          state.lists.map((list : any, i: number) => (
            <Column id={list.id} text= {list.text} key = {list.id} index = {i}  />
            ))
        }
        <AddNewItem toggleButtonText={'create new list'} onAdd={text => dispatch({ type: "ADD_LIST", payload:  text })}
/>
      </AppContainer>
    </div>
  );
};

export default App;
