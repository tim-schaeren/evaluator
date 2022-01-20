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

<br></br>

            <div className='question'>
                <label>What's the product you want to think about today?</label>
            </div>

            <div className='form-control'>
                <input type='text' placeholder='enter product name' value={day} onChange={(e) => setDay(e.target.value)} />
             </div>

            <br></br>

            <div className='question'>
                <label>Into which market do you plan to expand?</label>
            </div>

            <div className='form-control'>
                <input type='text' placeholder='enter name of market' value={day} onChange={(e) => setDay(e.target.value)} />
             </div>

            <br></br>

            <label>Use the sliders to indicate how much you agree</label>

            <br></br>
            <br></br>

            <div className='question'>
                <label>What's your plan on how to succeed in the new market?</label>
            </div>

            <br></br>

            <label>Aggregation</label>
            <div className='form-control form-control-check'>
               <input type='range' min="0" max="10" defaultValue="0" onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>

            <label>Arbitrage</label>
            <div className='form-control form-control-check'>
               <input type='range' min="0" max="10" defaultValue="0" onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>

            <label>Adaption</label>
            <div className='form-control form-control-check'>
               <input type='range' min="0" max="10" defaultValue="0" onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>

            <br></br>

            <div className='question'>
                <label>How do you plan on achieving this?</label>
            </div>

            <br></br>

            <label>We are ready to make changes to our product</label>
            <div className='form-control form-control-check'>
            <input type='range' min="0" max="10" defaultValue="0" onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>

            <label>We don't require a minimum number of sales</label>
            <div className='form-control form-control-check'>
            <input type='range' min="0" max="10" defaultValue="0" onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>

            <label>We aim to standardize our product</label>
            <div className='form-control form-control-check'>
            <input type='range' min="0" max="10" defaultValue="0" onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>

            <label>Lever 4</label>
            <div className='form-control form-control-check'>
            <input type='range' min="0" max="10" defaultValue="0" onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>

            <label>Lever 5</label>
            <div className='form-control form-control-check'>
            <input type='range' min="0" max="10" defaultValue="0" onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>

            <label>Lever 6</label>
            <div className='form-control form-control-check'>
            <input type='range' min="0" max="10" defaultValue="0" onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>




           <input type='submit' value='Evaluate!' className='btn btn-block'/>
         </form>
     )
 }
 
 export default Form
 