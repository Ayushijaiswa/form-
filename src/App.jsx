import './App.css'
import { useState } from 'react'
export default function App(){
  const [formData,setData]=useState({
    email:"",password:"",confirmpassword:"",joined:true
  })
 function handle(event){
   const {name,type,checked,value}=event.target;
   setData(prev=>({
    ...prev,
    [name]:type=="checkbox"?checked:value

   }))
 }
 function handlesubmit(event){
  event.preventDefault
  if(formData.password==formData.confirmpassword && formData.joined){
    alert("submited successfully")
  }
  else alert("please fill the form correctly")
  if(!formData.joined){
    alert("signing up require checking the box")
  }
 }







  return (
    <div className='form-container'>
      <form 
      className='form'
      onSubmit={handlesubmit}
      >
        <input 
        type="text"
         name="email" 
         id="email" 
         placeholder='email'
         className='input'
         onChange={handle}
         value={formData.email}
        />
        <input
         type="password" 
         name="password" 
         placeholder='password'
         id='password'
         className='input'
         onChange={handle}
         value={formData.password}
          />
         <input 
         type="password" 
         name="confirmpassword"
         placeholder='confirm passwaord'
         id='cnf'
         className='input'
         onChange={handle}
         value={formData.confirmpassword}
         />
         <div className='letter'>
          <input type="checkbox" 
          name="joined" 
          onChange={handle}
          checked={formData.joined}
          id="okay" />
          <label htmlFor="okay">I want to join the newsletter</label>
          </div>
         <button className='button'> Sign up</button>
      </form>
    </div>
  )
}
