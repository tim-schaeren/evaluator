 import React from 'react'
 import { useState } from 'react'
 import { Overlay } from 'react-portal-overlay';
 import { PieChart } from 'react-minimal-pie-chart';
 import Button from './Button';

 
 const Form = ({ onShowForm }) => {

    const [open, setIsOpen] = useState(true);

    const[showResults, setShowResults] = useState(false)

     const [product, setProduct] = useState('')
     const [market, setMarket] = useState('')
     const [isProductStandardized, setProductStandardized] = useState()
     const [maturityLevel, setMaturityLevel] = useState()

     function percentage(partialValue, totalValue) {
        console.log((100 * partialValue) / totalValue)
        return (100 * partialValue) / totalValue;
     } 

     const [target1, setTarget1] = useState(0)
     const [target2, setTarget2] = useState(0)
     const [target3, setTarget3] = useState(0)

     const [score1, setScore1] = useState()
     const [score2, setScore2] = useState()
     const [score3, setScore3] = useState()
     const [score4, setScore4] = useState()
     const [score5, setScore5] = useState()
     const [score6, setScore6] = useState()

     //This happens when submitting the form
     const onSubmit = (e) => {

         e.preventDefault() //prevents reloading of the page

         //loads the results page
         setShowResults(true)

     }


     return (

    <div>

       {showResults ? <Overlay className='Overlay' open={open} onClose={() => setIsOpen(false)}>
                <h1 className='OverlayHeader'>Your Results</h1>
                <p>
                    Alright, here's what we know:
                </p>
                <br></br>
                <p>
                    1. You want to try and sell <b>{product}</b> in <b>{market}</b>.{'\n'}
                </p>
                <br></br>
                <p>
                    2. You want to achieve this by using the strategies{'\n'}
                </p>
                {target1>0 ?   
                <h2 style={{color: "#00FFFF"}}>Aggregation</h2>
                : ''}
                {target2>0 ?
                <h2 style={{color: "#7FFFD4"}}>Arbitrage</h2>
                : ''}
                {target3>0 ?
                <h2 style={{color: "#0000FF"}}>Adaption</h2>
                : ''}
                <p>
                    as follows: {'\n'}
                </p>
                <PieChart totalValue={target1+target2+target3} animate={true} radius={30}
                    data={[
                        { title: 'Aggregation', value: target1, color: '#00FFFF'},
                        { title: 'Arbitrage', value: target2, color: '#7FFFD4' },
                        { title: 'Adaption', value: target3, color: '#0000FF' },
                    ]}
                    label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
                    labelStyle={{
                        fontSize: '7px',
                        fontFamily: 'sans-serif',
                        fill: 'white',
                      }}
                /> 
                <br></br>
                <p>
                    Next, let's analyze your strategy:
                </p>
                <br></br>


        {/*
        *
        * RULE ENGINE 3000
        * 
        */}        


        {/* GOING WITH ALL 3 STRATEGIES */}
        {target1 > 0 && target2 > 0 && target3 > 0 ?   
             <div>
                <h3 style={{color: "red"}}>
                    Rough start!
                </h3>
                <p>
                    You chose to go with all three strategies at once.
                    Be weary that this is not an easy feat and will most likely not work to your statisfaction. We recommend you concentrate on one or two for the start.
                </p>
                <br></br>
            {/* GOING WITH 2 STRATEGIES */}
                </div> : target1 > 0 && target2 > 0 || target2 > 0 && target3 > 0 || target3 > 0 && target1 > 0 ? <div>
                <h3 style={{color: "orange"}}>
                    Watch out!
                </h3>
                <p>
                    You chose to go with two strategies at once.
                    This is certainly doable but could be quite hard. You might want to concentrate on just one for the start.
                </p>
                <br></br>
            {/* GOING WITH 1 STRATEGY */}
                </div> : target1 > 0 && target2 == 0 && target3 == 0  || target2 > 0 && target3 == 0 && target1 == 0 || target3 > 0 && target2 == 0 && target1 == 0 ?   
             <div>
                <h3 style={{color: "green"}}>
                    Off to a great start!
                </h3>
                <p>
                    You chose to go with one strategy.
                    This is certainly the most realistic scenario for most companies. Choosing more than one can get tricky fast.
                </p>
                <br></br>
                </div> : '' }
            

            {/* BEING MORE OR LESS DIGITALLY MATURE */}
            {maturityLevel == 1 ?   
             <div>
                <h3 style={{color: "Red"}}>
                    Get to work on digital transformation!
                </h3>
                <p>
                    You indicated that your company is not digitally mature.
                    This might make make things harder for you when it comes to internationalizing. We advise you to keep pushing for digitalization!
                </p>
                <br></br>
                </div> :
                maturityLevel == 2 ?
                <div>
                <h3 style={{color: "Orange"}}>
                    Look out!
                </h3>
                <p>
                    You indicated that your company has not yet completely digitally matured.
                    While your level of digitalization will help you when internationalizing, we still advise you to keep pushing for more digitalization!
                </p>
                <br></br>
                </div> : 
                maturityLevel == 3 ?
                <div>
                <h3 style={{color: "Green"}}>
                    Perfectly digitized!
                </h3>
                <p>
                    You indicated that your company has a high level of digital maturity.
                    This will make your life considerably easier when internationalizing.
                </p>
                <br></br>
                </div> : ''}


             {/* HAVING A STANDARDIZED PRODUCT BUT USING ADAPTATION*/}
             {percentage(target3,(target1+target2+target3)) >= 50 && isProductStandardized == "true" ?   
             <div>
                <h3 style={{color: "Red"}}>
                    Standardization might be your pitfall!
                </h3>
                <p>
                    You indicated that your product is standardized and your strategy leans towards adaptation.
                    This is not advisable since it will be costly to change standardized products.
                </p>
                <br></br>
                </div> : ''}

            {/* HAVING A STANDARDIZED PRODUCT AND USING AGGREGATION*/}
            {percentage(target1,(target1+target2+target3)) >= 50 && isProductStandardized == "true" ?   
             <div>
                <h3 style={{color: "Green"}}>
                    Standardization for the win!
                </h3>
                <p>
                    You indicated that your product is standardized and your strategy leans towards aggregation.
                    Aggregation heavily favours standardized products since it's much easier to achieve scale.
                </p>
                <br></br>
                </div> : ''}

            {/* HAVING A STANDARDIZED PRODUCT BUT USING ARBITRAGE*/}
             {percentage(target2,(target1+target2+target3)) >= 50 && isProductStandardized == "true" ?   
             <div>
                <h3 style={{color: "Red"}}>
                    Standardization might be your pitfall!
                </h3>
                <p>
                    You indicated that your product is standardized and your strategy leans towards arbitrage.
                    This is not advisable since it will be costly to change standardized products.
                </p>
                <br></br>
                </div> : ''}

             {/* HAVING A CUSTOM-MADE PRODUCT BUT USING AGGREGATION*/}
             {percentage(target1,(target1+target2+target3)) >= 50 && isProductStandardized == "false" ?   
             <div>
                <h3 style={{color: "Red"}}>
                    Scaling custom is hard!
                </h3>
                <p>
                    You indicated that your product is custom-made and your strategy leans towards aggregation.
                    This is not advisable since you will not be able to scale custom-made products.
                </p>
                <br></br>
                </div> : ''}

            {/* HAVING A CUSTOM-MADE PRODUCT AND USING ARBITRAGE*/}
            {percentage(target2,(target1+target2+target3)) >= 50 && isProductStandardized == "false" ?   
             <div>
                <h3 style={{color: "Green"}}>
                    Specialising custom is easier!
                </h3>
                <p>
                    You indicated that your product is custom-made and your strategy leans towards arbitrage.
                    Arbitrage favours custom-made products since it's much easier to specialise these products.
                </p>
                <br></br>
                </div> : ''}

            {/* HAVING A CUSTOM-MADE PRODUCT AND USING ADAPTION*/}
            {percentage(target3,(target1+target2+target3)) >= 50 && isProductStandardized == "false" ?   
             <div>
                <h3 style={{color: "Green"}}>
                    Custom-made just for your new market!
                </h3>
                <p>
                    You indicated that your product is custom-made and your strategy leans towards adaption.
                    Arbitrage favours custom-made products since it's much easier to focus on national preferences with these products.
                </p>
                <br></br>
                </div> : ''}
            

            {/* WILLINGNESS TO ALTER PRODUCT */}
            {percentage(target1,(target1+target2+target3)) >= 50 && score1=="1"  ?   
             <div>
                <h3 style={{color: "Green"}}>
                    Alteration is not always the answer!
                </h3>
                <p>
                    You are planning to not alter your product and you lean towards Aggregation. 
                    Aggregation tries to achieve scale and scope through standardization, so this is a good fit!
                </p>
                <br></br>
                </div> : 
                percentage(target2,(target1+target2+target3)) >= 50 && score1=="2"  ?
                <div>
                <h3 style={{color: "Green"}}>
                    Changing your product to fit better!
                </h3>
                <p>
                    You are willing to make slight changes on your product and you lean towards Arbitrage. 
                    Arbitrage tries to achieve absolute economies through international specialisation, so this is a good fit!
                </p>
                <br></br>
                </div> :
                percentage(target3,(target1+target2+target3)) >= 50 && score1=="3"  ?
                <div>
                <h3 style={{color: "Green"}}>
                    Adapting to the market you want to conquer!
                </h3>
                <p>
                    You are willing to make significant changes your product and you lean towards Adaption. 
                    Adaption tries to achieve local relevance through national focus, so this is a good fit!
                </p>
                <br></br>
                </div> :
                percentage(target1,(target1+target2+target3)) >= 50 && score1!="1"  ?
                <div>
                <h3 style={{color: "Orange"}}>
                    Don't change things that work!
                </h3>
                <p>
                    You lean towards Aggregation but you indicated that you are planning to make changes to your product. 
                    Aggregation tries to achieve scale and scope through standardization, so this might not be a good fit!
                </p>
                <br></br>
                </div> :
                percentage(target2,(target1+target2+target3)) >= 50 && score1=="1"  ?
                <div>
                <h3 style={{color: "Orange"}}>
                    Arbitrage needs changes to your product!
                </h3>
                <p>
                    You lean towards Arbitrage but you indicated that you are not planning on making changes to your product. 
                    Arbitrage tries to achieve absolute economies through international specialisation, so this might not be a good fit!
                </p>
                <br></br>
                </div> :
                percentage(target3,(target1+target2+target3)) >= 50 && score1!="3"  ?
                <div>
                <h3 style={{color: "Orange"}}>
                    Sometimes we need to change!
                </h3>
                <p>
                    You lean towards Adaption but you indicated that you are not planning on making significant changes to your product. 
                    Adaption tries to achieve local relevance through national focus, so this might not be a good fit!
                </p>
                <br></br>
                </div> :
                ''}

            {/* INCREASING PRODUCTION VOLUME */}
            {percentage(target1,(target1+target2+target3)) >= 50 && score2=="1"  ?   
             <div>
                <h3 style={{color: "Green"}}>
                    Economies of YAY!
                </h3>
                <p>
                    You are planning to increase your production volume by a large amount and you lean towards Aggregation. 
                    Aggregation tries to achieve economies of scale, so this is a good fit!
                </p>
                <br></br>
                </div> : 
                percentage(target2,(target1+target2+target3)) >= 50 && score2=="2"  ?
                <div>
                <h3 style={{color: "Green"}}>
                    We don't always need more!
                </h3>
                <p>
                    You are willing to increase your production volume slightly and you lean towards Arbitrage. 
                    Arbitrage tries to achieve absolute economies through international specialisation not through scale, so this is a good fit!
                </p>
                <br></br>
                </div> :
                percentage(target3,(target1+target2+target3)) >= 50 && score2=="3"  ?
                <div>
                <h3 style={{color: "Green"}}>
                    Let's make more stuff!
                </h3>
                <p>
                    You are willing to moderately increase your production volume and you lean towards Adaption. 
                    Adaption often requires a moderate increase in production volume, so this is a good fit!
                </p>
                <br></br>
                </div> :
                percentage(target1,(target1+target2+target3)) >= 50 && score1!="1"  ?
                <div>
                <h3 style={{color: "Orange"}}>
                    We need to make more stuff!
                </h3>
                <p>
                    You lean towards Aggregation but you indicated that you are not planning on increasing your production volume by a large amount. 
                    Aggregation tries to achieve scale, so this might not be a good fit!
                </p>
                <br></br>
                </div> :
                percentage(target2,(target1+target2+target3)) >= 50 && score2=="3"  ?
                <div>
                <h3 style={{color: "Orange"}}>
                    Step on the production-brakes!
                </h3>
                <p>
                    You clean towards Arbitrage but you indicated that you are planning on increasing your production volume by a large amount. 
                    Arbitrage tries to achieve absolute economies through international specialisation, so this might not be a good fit!
                </p>
                <br></br>
                </div> :
                percentage(target3,(target1+target2+target3)) >= 50 && score2!="2"  ?
                <div>
                <h3 style={{color: "Orange"}}>
                    We might need more product!
                </h3>
                <p>
                    You lean towards Adaption but you indicated that you are planning on only increasing your production volumes slightly. 
                    Adaption often requires a moderate increase in production volume, so this might not be a good fit!
                </p>
                <br></br>
                </div> :
                
                ''}

            {/* COST STRATEGY */}
            {percentage(target1,(target1+target2+target3)) >= 50 && score3=="1"  ?   
             <div>
                <h3 style={{color: "Green"}}>
                    Well done!
                </h3>
                <p>
                    You are planning to be efficient through standardization and you lean towards Aggregation. 
                    Aggregation tries to achieve economies of scale, so this is a good fit!
                </p>
                <br></br>
                </div> : 
                percentage(target2,(target1+target2+target3)) >= 50 && score3=="3"  ?
                <div>
                <h3 style={{color: "Green"}}>
                    Well done!
                </h3>
                <p>
                    You picked the arbitrage answer and you lean towards Arbitrage. 
                    This is a good fit!
                </p>
                <br></br>
                </div> :
                percentage(target3,(target1+target2+target3)) >= 50 && score3=="2"  ?
                <div>
                <h3 style={{color: "Green"}}>
                    Well done!
                </h3>
                <p>
                    You picked the adaption answer and you lean towards Adaption. 
                    This is a good fit!
                </p>
                <br></br>
                </div> :
                percentage(target1,(target1+target2+target3)) >= 50 && score3!="1"  ?
                <div>
                <h3 style={{color: "Orange"}}>
                    Watch out!
                </h3>
                <p>
                    You lean towards Aggregation but you chose a different answer. 
                    This might not be a good fit!
                </p>
                <br></br>
                </div> :
                percentage(target2,(target1+target2+target3)) >= 50 && score3!="3"  ?
                <div>
                <h3 style={{color: "Orange"}}>
                    Watch out!
                </h3>
                <p>
                    You lean towards Arbitrage but you chose a different answer. 
                    This might not be a good fit!
                </p>
                <br></br>
                </div> :
                percentage(target3,(target1+target2+target3)) >= 50 && score3!="2"  ?
                <div>
                <h3 style={{color: "Orange"}}>
                    We might need more product!
                </h3>
                <p>
                    You lean towards Adaption but you chose a different answer. 
                    This might not be a good fit!
                </p>
                <br></br>
                </div> :
                
                ''}

            {/* ORGANISATIONAL STRUCTURE */} {/*1= aggregation 2= adaptation  3= arbitrage */}
            {percentage(target1,(target1+target2+target3)) >= 50 && score4=="1"  ?   
            <div>
                <h3 style={{color: "Green"}}>
                    Local is great!
                </h3>
                <p>
                    You are planning to organise your operations by business region or customer and you lean towards Aggregation. 
                    This is a good fit!
                </p>
                <br></br>
                </div> : 
                percentage(target3,(target1+target2+target3)) >= 50 && score4=="2"  ?
                <div>
                <h3 style={{color: "Green"}}>
                    Organise by country!
                </h3>
                <p>
                    You are planning to organise your operations by country and you lean towards Adaptation. 
                    This is a good fit!
                </p>
                <br></br>
                </div> :
                percentage(target2,(target1+target2+target3)) >= 50 && score4=="3"  ?
                <div>
                <h3 style={{color: "Green"}}>
                    Organising by function!
                </h3>
                <p>
                    You are planning to organise your operations by function and you lean towards Arbitrage. 
                    This is a good fit!
                </p>
                <br></br>
                </div> :
                percentage(target1,(target1+target2+target3)) >= 50 && score4!="1"  ?
                <div>
                <h3 style={{color: "Orange"}}>
                    Ouch!
                </h3>
                <p>
                    You lean towards Aggregation but you indicated that you are not planning to organise your operations by business region or customer. 
                    This might not be a good fit!
                </p>
                <br></br>
                </div> :
                percentage(target3,(target1+target2+target3)) >= 50 && score4!="2"  ?
                <div>
                <h3 style={{color: "Orange"}}>
                    Watch out!
                </h3>
                <p>
                    You lean towards Arbitrage but you indicated that you are not planning to organise your operations by country.
                    This might not be a good fit!
                </p>
                <br></br>
                </div> :
                percentage(target2,(target1+target2+target3)) >= 50 && score4!="3"  ?
                <div>
                <h3 style={{color: "Orange"}}>
                    We might need more product!
                </h3>
                <p>
                    You lean towards Adaption but you indicated that you are planning on only increasing your production volumes slightly. 
                    Adaption often requires a moderate increase in production volume, so this might not be a good fit!
                </p>
                <br></br>
                </div> :
                
                ''}




                
                <Button text='Go Back' color='green' onClick={() => location.reload()}/>
        </Overlay> : ''}

         <form className='add-form' onSubmit={onSubmit}>

        <br></br>

            <div className='question'>
                <label>What's the product you want to think about today?</label>
            </div>

            <div className='form-control'>
                <input type='text' placeholder='enter name of product' value={product} onChange={(e) => setProduct(e.target.value)} />
             </div>

            <br></br>

            <div className='question'>
                <label>Into which market do you plan to expand?</label>
            </div>

            <div className='form-control'>
                <input type='text' placeholder='enter name of market' value={market} onChange={(e) => setMarket(e.target.value)} />
             </div>

            <br></br>

            <div className='question'>
                <label>Is your product standardized or custom-made?</label>
            </div>

            <br></br>

            
            <div className='form-control form-control-radio'>
            <label>standardized</label>
            <input type='radio' value={true} name="isStandardized" onChange={(e) => setProductStandardized(e.currentTarget.value)} />
            </div>
            <div className='form-control form-control-radio'>
            <label>custom-made</label>
            <input type='radio' value={false} name="isStandardized" onChange={(e) => setProductStandardized(e.currentTarget.value)} />
            </div>

            <br></br>

            <div className='question'>
                <label>How digitally mature is your company?</label>
            </div>

            <br></br>

            <div className='form-control form-control-radio'>
            <label>not yet integrated digitalization</label>
            <input type='radio' value="1" name="maturityLevel" onChange={(e) => setMaturityLevel(e.currentTarget.value)} /> 
            </div>
            <div className='form-control form-control-radio'>
            <label>in the process of digitalization</label>
            <input type='radio' value="2" name="maturityLevel" onChange={(e) => setMaturityLevel(e.currentTarget.value)} />
            </div>
            <div className='form-control form-control-radio'>
            <label>completely digitalized</label>
            <input type='radio' value="3" name="maturityLevel" onChange={(e) => setMaturityLevel(e.currentTarget.value)} />
            </div>


            <br></br>
            <br></br>

            <div className='question'>
                <label>What's your plan on how to succeed in the new market? (use the sliders to indicate)</label>
            </div>

            <br></br>

            <label>To achieve scale and scope economies through international standardization(aggreg)</label> {/* Aggregation */}
            <div className='form-control form-control-range'>
               <input type='range' min="0" max="10" defaultValue="0" onChange={(e) => setTarget1(e.currentTarget.valueAsNumber)} />
            </div>

            <label>To achieve absolute economies through international specialisation(arbi)</label> {/* Arbitrage */}
            <div className='form-control form-control-range'>
               <input type='range' min="0" max="10" defaultValue="0" onChange={(e) => setTarget2(e.currentTarget.valueAsNumber)} />
            </div>

            <label>Achieving local relevance through national focus(adapt) </label> {/* Adaptation */}
            <div className='form-control form-control-range'>
               <input type='range' min="0" max="10" defaultValue="0" onChange={(e) => setTarget3(e.currentTarget.valueAsNumber)} />
            </div>

            <br></br>

            <div className='question'>
                <label>Are you going to adapt your product to the market?</label> {/* 1= aggregation 2= adaptation  3= arbitrage  */}
            </div>  
            <div className='form-control form-control-radio'>
            <label>Not at all</label>
            <input type='radio' value={1} name="score1" onChange={(e) => setScore1(e.currentTarget.value)} /> 
            </div>
            <div className='form-control form-control-radio'>
            <label>Slight changes</label>
            <input type='radio' value={2} name="score1" onChange={(e) => setScore1(e.currentTarget.value)} />
            </div> 
            <div className='form-control form-control-radio'>
            <label>Significant changes</label>
            <input type='radio' value={3} name="score1" onChange={(e) => setScore1(e.currentTarget.value)} /> 
            </div>

            <br></br>

            <div className='question'>
                <label>By how much can you increase production volume?</label> {/*1= aggregation 2= adaptation  3= arbitrage  */}
            </div>  
            <div className='form-control form-control-radio'>
            <label>Big increase</label>
            <input type='radio' value={1} name="score2" onChange={(e) => setScore2(e.currentTarget.value)} /> 
            </div>
            <div className='form-control form-control-radio'>
            <label>Slight increase</label>
            <input type='radio' value={2} name="score2" onChange={(e) => setScore2(e.currentTarget.value)} />
            </div>
            <div className='form-control form-control-radio'>
            <label>Moderate increase</label>
            <input type='radio' value={3} name="score2" onChange={(e) => setScore2(e.currentTarget.value)} />
            </div>

            <br></br>

            <div className='question'>
                <label>What is your cost strategy?</label> {/*1= aggregation 2= adaptation  3= arbitrage  */}
            </div> 
            <div className='form-control form-control-radio'>
            <label>Efficiency through standardization</label>
            <input type='radio' value={1} name="score3" onChange={(e) => setScore3(e.currentTarget.value)} /> 
            </div>
            <div className='form-control form-control-radio'>
            <label>Adaption cost strategy</label>
            <input type='radio' value={2} name="score3" onChange={(e) => setScore3(e.currentTarget.value)} />
            </div>
            <div className='form-control form-control-radio'>
            <label>Arbitrage cost strategy</label>
            <input type='radio' value={3} name="score3" onChange={(e) => setScore3(e.currentTarget.value)} />
            </div>

            <br></br>

            <div className='question'>
                <label>How should your operations be organised internationally?</label> {/*1= aggregation 2= adaptation  3= arbitrage  */}
            </div> 
            <div className='form-control form-control-radio'>
            <label>By business region or customer</label>
            <input type='radio' value={1} name="score4" onChange={(e) => setScore4(e.currentTarget.value)} /> 
            </div>
            <div className='form-control form-control-radio'>
            <label>By country</label>
            <input type='radio' value={2} name="score4" onChange={(e) => setScore4(e.currentTarget.value)} />
            </div>
            <div className='form-control form-control-radio'>
            <label>By function</label>
            <input type='radio' value={3} name="score4" onChange={(e) => setScore4(e.currentTarget.value)} />
            </div>

            <br></br>

            <div className='question'>
                <label>Which of the following sounds suitable to you?</label> {/*1= aggregation 2= adaptation  3= arbitrage  */}
            </div> 
            <div className='form-control form-control-radio'>
            <label>We are ready to standardize our product and prizing based on our clustering (regions)</label>
            <input type='radio' value={1} name="score5" onChange={(e) => setScore5(e.currentTarget.value)} /> 
            </div>
            <div className='form-control form-control-radio'>
            <label>Adaptation answer</label>
            <input type='radio' value={2} name="score5" onChange={(e) => setScore5(e.currentTarget.value)} />
            </div>
            <div className='form-control form-control-radio'>
            <label>We are ready to alter the price of our product in the new market</label>
            <input type='radio' value={3} name="score5" onChange={(e) => setScore5(e.currentTarget.value)} />
            </div>

            <br></br>

           <input type='submit' value='Evaluate!' className='btn btn-block'/>
         </form>
    </div>
     )
 }
 
 export default Form
 