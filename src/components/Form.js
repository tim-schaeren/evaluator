 import React from 'react'
 import { useState } from 'react'
 
 const Form = ({ onAdd }) => {
     const [text, setText] = useState('')
     const [day, setDay] = useState('')
     const [reminder, setReminder] = useState(false)

     const onSubmit = (e) => {
         e.preventDefault()
         alert('Evaluation coming soon')

        onAdd({ text, day, reminder })

        setText('')
        setDay('')
        setReminder(false)

     }


     return (
         <form className='add-form' onSubmit={onSubmit}>
            <div className=''>
                <label>How many product categories do you have?</label>
            </div>
            <div className='form-control form-control-check'>
                <label htmlFor="justOne">just one</label>
                <input type='checkbox' id='justOne' value={text} onChange={(e) => setText(e.target.value)} />
               
                <label htmlFor="aFew">a few</label>
                <input type='checkbox' id='aFew' value={text} onChange={(e) => setText(e.target.value)} />
                
                <label htmlFor="lots">lots</label>
                <input type='checkbox' id='lots' value={text} onChange={(e) => setText(e.target.value)} />
           </div>
           <div className='form-control'>
               <label>What's the product you want to think about today?</label>
               <input type='text' placeholder='product name' value={day} onChange={(e) => setDay(e.target.value)} />
           </div>
           <div className='form-control form-control-check'>
               <label>Choose strategy option A</label>
               <input type='checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
           </div>
           <div className='form-control form-control-check'>
               <label>Choose strategy option B</label>
               <input type='checkbox'/>
           </div>
           <div className='form-control form-control-check'>
               <label>Choose strategy option C</label>
               <input type='checkbox'/>
           </div>
           <div className='form-control form-control-check'>
               <label>Choose strategy option D</label>
               <input type='checkbox'/>
           </div>

           <input type='submit' value='Evaluate!' className='btn btn-block'/>
         </form>
     )
 }
 
 export default Form
 