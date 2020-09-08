import {Task, List} from './type'

interface Item {
    id : string
}
    

export const FindItemIndexById = <T extends Item> (items : T[], id: string) => {
    return items.findIndex((item: T) => item.id === id)
}

export const findIdByDraggedProp = (index: number, state: any) : string  => {
    state.lists[index].tasks.map((task: Task) => {
      if(task !== null) {
        if (task.drag === false)
        {
          return task.id
        } 
    }
    return 'wrong'
      })  
  return 'wrong'
  }

  export const findObjectIDByDraggedProp = (lists: List[]) : number => {
    let TaskIndex : number = -10
      lists.map((list: any) => {
      const Tindex = list.tasks?.findIndex((task: Task) => {
        return task?.drag === true 
      } ) 
       if(Tindex > -1) {
         TaskIndex = Tindex
       }
       return TaskIndex
    }) 
     return TaskIndex
  }

  export const findDragStartCol = (lists : List[]) => {
    return lists.findIndex((item) => {
      return item.dragged === true})
  }

  export const findDraggedTaskIndex = (lists : List[], id : string, Cid: any) : number => {
    let TaskIndex : number = -10
    let Tindex : number
    Tindex = lists[Cid].tasks.findIndex((task: Task) => {
        return task?.id === id
      }  ) 

      if(Tindex > -1) {
         TaskIndex = Tindex
       }
       return TaskIndex
    } 