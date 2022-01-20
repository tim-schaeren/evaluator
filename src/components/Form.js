 import React from 'react'
 import { useState } from 'react'
 
 const Form = ({ onAdd }) => {
     const [product, setProduct] = useState('')
     const [market, setMarket] = useState('')
     const [target1, setTarget1] = useState('')
     const [target2, setTarget2] = useState('')
     const [target3, setTarget3] = useState('')
     const [score1, setScore1] = useState('')
     const [score2, setScore2] = useState('')
     const [score3, setScore3] = useState('')
     const [score4, setScore4] = useState('')
     const [score5, setScore5] = useState('')
     const [score6, setScore6] = useState('')

     const onSubmit = (e) => {
         e.preventDefault()
         alert('Evaluation coming soon')

        onAdd({ product, market,  target1, target2, target3, score1, score2, score3, score4, score5, score6 })

        setProduct('')
        setMarket('')
        setTarget1('')
        setTarget2('')
        setTarget3('')
        setScore1('')
        setScore2('')
        setScore3('')
        setScore4('')
        setScore5('')
        setScore6('')

     }


     return (
         <form className='add-form' onSubmit={onSubmit}>

<br></br>

            <div className='question'>
                <label>What's the product you want to think about today?</label>
            </div>

            <div className='form-control'>
                <input type='text' placeholder='enter product name' value={product} onChange={(e) => setProduct(e.target.value)} />
             </div>

            <br></br>

            <div className='question'>
                <label>Into which market do you plan to expand?</label>
            </div>

            <div className='form-control'>
                <input type='text' placeholder='enter name of market' value={market} onChange={(e) => setMarket(e.target.value)} />
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
               <input type='range' min="0" max="10" defaultValue="0" onChange={(e) => setTarget1(e.currentTarget.value)} />
            </div>

            <label>Arbitrage</label>
            <div className='form-control form-control-check'>
               <input type='range' min="0" max="10" defaultValue="0" onChange={(e) => setTarget2(e.currentTarget.value)} />
            </div>

            <label>Adaption</label>
            <div className='form-control form-control-check'>
               <input type='range' min="0" max="10" defaultValue="0" onChange={(e) => setTarget3(e.currentTarget.value)} />
            </div>

            <br></br>

            <div className='question'>
                <label>How do you plan on achieving this?</label>
            </div>

            <br></br>

            <label>We are ready to make changes to our product</label>
            <div className='form-control form-control-check'>
            <input type='range' min="0" max="10" defaultValue="0" onChange={(e) => setScore1(e.currentTarget.value)} />
            </div>

            <label>We don't require a minimum number of sales</label>
            <div className='form-control form-control-check'>
            <input type='range' min="0" max="10" defaultValue="0" onChange={(e) => setScore2(e.currentTarget.value)} />
            </div>

            <label>We aim to standardize our product</label>
            <div className='form-control form-control-check'>
            <input type='range' min="0" max="10" defaultValue="0" onChange={(e) => setScore3(e.currentTarget.value)} />
            </div>

            <label>Lever 4</label>
            <div className='form-control form-control-check'>
            <input type='range' min="0" max="10" defaultValue="0" onChange={(e) => setScore4(e.currentTarget.value)} />
            </div>

            <label>Lever 5</label>
            <div className='form-control form-control-check'>
            <input type='range' min="0" max="10" defaultValue="0" onChange={(e) => setScore5(e.currentTarget.value)} />
            </div>

            <label>Lever 6</label>
            <div className='form-control form-control-check'>
            <input type='range' min="0" max="10" defaultValue="0" onChange={(e) => setScore6(e.currentTarget.value)} />
            </div>




           <input type='submit' value='Evaluate!' className='btn btn-block'/>
         </form>
     )
 }
 
 export default Form
 