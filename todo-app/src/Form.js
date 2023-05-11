import React from 'react'

const Form = ({inputText , setInputText , setTodos , todos }) => {

const inputChange = e =>{
    setInputText(e.target.value)

}
const inputSubmit = () =>{
setTodos=([...todos,{text:inputText,completed:false , id:Math.random()*10000}])
setInputText("")
}


  return (
    <div className='input__container' >
        <div className="input__button">
            
            <input type="text" value={inputText} onChange={inputChange} />
            <button onClick={inputSubmit}>ADD</button>
        </div>
      
    </div>
  )
}

export default Form