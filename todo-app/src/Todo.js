
import React from 'react'
import { VscChromeClose, VscPassFilled } from "react-icons/vsc";


const Todo = ({text ,todos , setTodos, todo }) => {

  const deleteItem = () => {
    setTodos(todos.filter(element => element.id !== todo.id))
  }

const  completeItem = () =>{
  setTodos(todos.map(item =>{
    if (item.id === todo.id) {
return {
  ...item,
  completed:!item.completed
}

    }
    return item
  }))
}

  return (
    <div className='todo__container'>

      <div className={todo.completed ? "completed" : "notYet"} > {text} </div>
        <VscPassFilled onClick={completeItem}  className='icon' />
        <VscChromeClose onClick={deleteItem} className='icon' />
     

    </div>
  )
}

export default Todo