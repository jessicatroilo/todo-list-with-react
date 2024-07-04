import React, {useState} from 'react'
import './App.css'


function App() {
  
  //1. le state 
  const [todos, setTodos] = useState([
    {id: 0, name:"Faire mes courses", checked: false},
    {id: 1, name:"Ranger mon bureau", checked: false},
    {id: 2, name:"Jouer à Call of Duty", checked: false},
  ]); 

    //2. Le comportement
  const handleDelete = (id) => {
    const tasksCopy = [...todos];
    const tasksCoptUpdated = tasksCopy.filter(task => task.id !== id);
    setTodos(tasksCoptUpdated);
  }

  //3. Le rendu
  return (
   <div className='app-wrapper'>
    <h1>Todo List</h1>

    <Form todos={todos} setTodos={setTodos} /> 
    
    <div className='todo-list'>
      <ul>
      {todos.map((todo) => (
        <Task
        onClick= {()=>{handleDelete(todo.id)}}  
        key={todo.id}>
          {todo.name}
        </Task>
      ))}
      </ul>
    </div>

   </div>
  )
}

//! Components
/**
 *  Form component to add a new task
 * @param {string} todos
 * @param {function} setTodos
 * @returns 
 */
const Form = ({ todos, setTodos }) => {
  //1. le state 
  const [newTodo, setNewTodo] = useState(''); 
  //2. Le comportement
  const onSubmit = (event) => {
    event.preventDefault();

    const tasksCopy = [...todos];
    const id = new Date().getTime();
    const name = newTodo;
    const checked = false;
    tasksCopy.push({id, name, checked});
    
    setTodos(tasksCopy);
    setNewTodo('');
  }

  const handleChange = (event) => {
    const valueAfterChange = event.target.value;
    setNewTodo(valueAfterChange);
  }


  //3. Le rendu
  return <form className='form-wrapper' onSubmit={onSubmit}>
    <input 
    value={newTodo}  
    className='input' 
    type="text" 
    placeholder="Ajouter une tâche"
    onChange={handleChange}
     />
    <Button type='submit'> Ajouter </Button>
  </form>
}

/**
 * Button component
 * @param {string} children 
 * @param {function} props
 * @returns 
 */
//evite de passer deux fois children en le mettant dans la function
const Button = ({children,...props}) => { 
  return <button className='button' {...props}> 
    {children}
    </button>
}

/**
 * task component to show list of tasks
 * @param {string} children
 * @param {function} onDelete
 * @returns 
 */
const Task = ({children,onClick}) => {
 //1. le state 


 //2. Le comportement


  //3. Le rendu
  return <li className='todo-wrapper'>
    <Checkbox />
    <label className='todo-text'>{children}</label>
    <button onClick={onClick} className='todo-delete'>X</button>  
  </li>
}


/**
 * checkbox component
 * @returns 
 */
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
