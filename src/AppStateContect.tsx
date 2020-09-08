import React, { createContext, useContext, useReducer, useEffect } from "react"
import {v1 as uuid} from "uuid"; 

import { FindItemIndexById, findObjectIDByDraggedProp, 
    findDragStartCol, findDraggedTaskIndex } from './FinItemByIndex'
import {Action, Task,
        AppState, AppStateContextProps} from './type'

  

const appData: AppState = {
    
    lists: [
    {
    id: "0",
    text: "To Do",
    dragged: false,
    tasks: [{ id: "c0", text: "Generate app scaffold", drag:false }]
    },
    {
    id: "1",
    text: "In Progress",
    dragged: false,
    tasks: [{ id: "c1", text: "Learn Typescript", drag:false }]
    },
    {
    id: "2",
    text: "Done",
    dragged: false,
    tasks: [{ id: "c3", text: "Begin to use static typing", drag:false }]
    }
    ]
}

console.log()





    const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps)

   
      
    const appStateReducer = (state : AppState, action : Action) : AppState => {
        switch(action.type){
            case "ADD_LIST": {
                return{
                    ...state,
                    lists : [
                        ...state.lists, {id : uuid(), text: action.payload, dragged: false, tasks:[]}
                    ]
                    
                }
            }
            case "ADD_TASK" : {
                const TargetIndex = FindItemIndexById(state.lists, action.payload.taskId)
                state.lists[TargetIndex].tasks.push({
                    id: uuid(),
                    text: action.payload.text,
                    drag:false 
                })
                return{
                    ...state
                }
            }
            case "REMOVE_TASK" : {
                const removeIndex = FindItemIndexById(state.lists, action.payload.taskId)
                state.lists.filter(item => item.id !== removeIndex.toString() )
                return{
                    ...state
                }
            }
            case "DRAGGED_TASK" : {
                const TargetCol = FindItemIndexById(state.lists, action.payload.Cid)
       
                const TaskIndex = 
                findDraggedTaskIndex(state.lists, action.payload.taskId, action.payload.Cid)
                state.lists[TargetCol].dragged = true
                state.lists[TargetCol].tasks[TaskIndex].drag = true 
                return{
                    ...state
                }
                }
            case "DRAGGED_TASK_END" : {
                const TargetCol = FindItemIndexById(state.lists, action.payload.Cid)
                const TaskIndex = 
                findDraggedTaskIndex(state.lists, action.payload.taskId, action.payload.Cid)
                state.lists.map(list => {if(list.dragged===true) 
                    { list.dragged = false} 
                return {...state}} )
                state.lists[TargetCol].tasks[TaskIndex].drag = false
                return{
                    ...state
                }
            }
            
            case "DROP": {
                const TargetCol = FindItemIndexById(state.lists, action.payload.Cid)
                const TargetObjectIndex = findObjectIDByDraggedProp(state.lists)
                const startCoulmn = findDragStartCol(state.lists)
                if(TargetCol !== startCoulmn)
                {
                    state.lists[TargetCol].tasks.push(state.lists[startCoulmn].tasks[TargetObjectIndex])
                state.lists.map(list => {
                    list.dragged = false
                    list.tasks.map((task : Task) => {
                        if(task !== null){
                            task.drag = false
                        }
                    return{...state}})
                    return{...state}
                })
                delete state.lists[startCoulmn].tasks[TargetObjectIndex]
                }
                
                return{
                    ...state
                }
            }
            }
        }                           

    const IS = localStorage.getItem('list') as string 
    console.log("LIST IS", JSON.parse(IS))
    const Initial_state = JSON.parse(IS) ?? appData
    export const AppStateProvider = ({children} : React.PropsWithChildren<{}>) => {
        const [state, dispatch] = useReducer(appStateReducer, Initial_state)
        useEffect(() => localStorage.setItem('list',JSON.stringify(state)),[state])
            return(
                <AppStateContext.Provider value = {{state, dispatch}}>
                    {children}
                </AppStateContext.Provider>
            )
        }

    export const UseAppState = () => {
        return useContext(AppStateContext)
    }