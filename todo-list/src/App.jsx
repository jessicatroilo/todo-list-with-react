import React, {useState} from 'react'
//TODO import './App.css' -> quand il sera fait le CSS
//import Task from './components/Task'

function App() {
  
  //1. le state 

  //2. Le comportement



  //3. Le rendu
  return (
   <div className='app-wrapper'>
    <h1>Todo List</h1>

    <Form />
  
    <Task/>
    
   </div>
  )
}

const Form = () => {
  return <form className='form-wrapper'>
    <input className='input' type="text" placeholder="Ajouter une tâche" />
    <Button type='submit'> Ajouter </Button>
  </form>
}

//evite de passer deux fois children en le mettant dans la function
const Button = ({children,...props}) => { 
  return <button className='button' {...props}> 
    {children}
    </button>
}

const Task = ({children}) => {
  return <div className='todo-wrapper'>
    <Checkbox />
    <label className='todo-text'>{children}</label>
  </div>
}

const Checkbox = () => {
  //1. le state 
  const [checked, setChecked] = useState(false);

  //2. Le comportement
  const onChange = (event) => {
    setChecked(event.target.checked);
  }

  //3. Le rendu
  return <div className='checkbox'> 
    <input type="checkbox" checked={checked} onChange={onChange}/>
    {checked && (<span>✓</span>)}
    </div>
}

export default App
