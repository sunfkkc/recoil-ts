import React from 'react'
import {Todo,todoListState} from './todoListState'
import {useRecoilState} from 'recoil'
interface Props{
    item:Todo,
}

function TodoItem({item}:Props) {

    const [todoList, setTodoList] = useRecoilState(todoListState)
    const index = todoList.findIndex((listItem)=> listItem===item)

    const editItemText = function(e:React.ChangeEvent<HTMLInputElement>){
        const newList = replaceItemAtIndex(todoList,index,{...item,text:e.target.value})
        setTodoList(newList)
    }
    
    const toggleItemCompletion = function(e:React.ChangeEvent<HTMLInputElement>){
        const newList = replaceItemAtIndex(todoList, index, {
            ...item,
            isComplete:!item.isComplete,
        })

        setTodoList(newList)
    }

    const deleteItem = function(){
        const newList = removeItemAtIndex(todoList,index)

        setTodoList(newList)
    }

  return (
    <div>
        <input 
        type="text"
        value={item.text}
        onChange={editItemText}/>

        <input
        type='checkbox'
        checked={item.isComplete}
        onChange={toggleItemCompletion}/>

        <button
        onClick={deleteItem}>X</button>
    </div>
  )
}

export default TodoItem


function replaceItemAtIndex(arr:Todo[], index:number, newValue:Todo){
    return [...arr.slice(0,index), newValue, ...arr.slice(index+1)]
}
function removeItemAtIndex(arr:Todo[], index:number){
    return [...arr.slice(0,index),...arr.slice(index+1)]
}