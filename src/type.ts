export type Action = 
| {
    type: 'ADD_LIST'
    payload: string
}
| {
    type: "ADD_TASK"
    payload: {text: string; taskId: string}
}
| {
    type: "REMOVE_TASK"
    payload: {text:string; taskId: string}
}
| {
    type: "DRAGGED_TASK"
    payload: {Cid: string ,taskId: string}
}
| {
    type: "DRAGGED_TASK_END"
    payload: {Cid: string ,taskId: string}
}
| {
    type: "DROP"
    payload: {Cid: string, taskId: string, e: React.DragEvent}
}

export interface Task {
    id : string 
    text: string
    drag: boolean
}

export interface List {
    id : string
    text : string
    dragged: boolean
    tasks : Task[]
}

export interface AppState {
    lists : List[]
}

export interface AppStateContextProps {
    state : AppState
    dispatch : React.Dispatch<Action>
}