import React,{useState} from 'react'
import {useSetRecoilState} from 'recoil'
import {todoListState, Todo} from './todoListState'



function TodoItemCreator() {
    
    const [inputValue, setInputValue] = useState<string>('')
    const setTodoList = useSetRecoilState<Todo[]>(todoListState)

    const addItem = function(){


        setTodoList((prev)=>[
            ...prev,
            {
                id:Date.now(),
                text:inputValue,
                isComplete: false,
            },
        ])
        setInputValue('')
    }

    const onChange = function(e:React.ChangeEvent<HTMLInputElement>){
        setInputValue(e.target.value)
    }
  return (
      <div>
          <input type='text' value={inputValue} onChange={onChange}/>
          <button onClick={addItem}>Add</button>
      </div>

  )
}

export default TodoItemCreator