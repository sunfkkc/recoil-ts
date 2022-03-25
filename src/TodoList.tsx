import React,{useState} from 'react'
import {atom, useRecoilValue, useRecoilState, useSetRecoilState} from 'recoil'
import TodoItem from './TodoItem'
import TodoItemCreator from './TodoItemCreator'
import {todoListFilterState,filteredTodoListState} from './todoListState'

type Option = "Show All" | "Show Completed" | "Show Uncompleted" 

function TodoList() {


    const setFilter = useSetRecoilState(todoListFilterState)
    const todoList = useRecoilValue(filteredTodoListState)

  return (
    <>
    <button onClick={e=>{setFilter("Show All")}}>Show All</button>
    <button onClick={e=>{setFilter("Show Completed")}}>Show Completed</button>
    <button onClick={e=>{setFilter("Show Uncompleted")}}>Show Uncomplted</button>
    <TodoItemCreator/>
    {todoList.map(todoItem => 
        <TodoItem key={todoItem.id} item={todoItem}/>
        )}
    </>
  )
}

export default TodoList