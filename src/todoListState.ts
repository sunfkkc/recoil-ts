import {atom, selector} from 'recoil'
export interface Todo{
    id:number,
    text:string,
    isComplete:boolean,
}
export const todoListState = atom<Todo[]>({
    key:'todoListState',
    default:[],
})

type Option = "Show All" | "Show Completed" | "Show Uncompleted" 
export const todoListFilterState = atom<Option>({
    key: 'todoListFilterState',
    default: "Show All",
})

export const filteredTodoListState = selector({
    key: 'filteredTodoListState',
    get: ({get}) => {
        const filter = get(todoListFilterState)
        const list = get(todoListState)

        switch (filter){
            case 'Show Completed':
                return list.filter((item)=>item.isComplete)
            case 'Show Uncompleted':
                return list.filter((item)=>!item.isComplete)
            default:
                return list
        }
    }
})