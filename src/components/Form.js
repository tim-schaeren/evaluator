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

     //This happens when submitting the form
     const onSubmit = (e) => {

         e.preventDefault() //prevents reloading of the page

         //loads the results page
         setShowResults(true)

     }


     return (

    <div>
        <form className='add-form'>

       {showResults ? <Overlay className='Overlay' open={open} onClose={() => setIsOpen(false)}>
                <hr size='10'color='black' ></hr>
                <br></br>
                <h1 className='OverlayHeader'>Results: Part 1</h1>
                <h2 className='OverlayHeader'>Here we look at the facts you provided and what kind of strategic orientation you chose</h2>
                <hr size='10'color='black' ></hr>
                <br></br>
                <h3>
                    Here's what we know:
                </h3>
                <br></br>
                <p>
                    1. You want to try and sell <u>{product}</u> in <u>{market}</u>.{'\n'}
                </p>
                <br></br>
                <p>
                    2. You have a <u>{isProductStandardized=="true" ? 'standardized ' : 'non-standardized '}</u>Product.{'\n'}
                </p>
                <br></br>
                <p>
                    3. You chose these strategic pillars:{'\n'}
                </p>
                <br></br>
                {target1>0 ?   
                <h2 style={{color: "#00008B"}}>Aggregation</h2>
                : ''}
                {target2>0 ?
                <h2 style={{color: "#1E90FF"}}>Arbitrage</h2>
                : ''}
                {target3>0 ?
                <h2 style={{color: "#0000FF"}}>Adaptation</h2>
                : ''}
                <br></br>
                <p>
                    as follows: {'\n'}
                </p>
                <PieChart totalValue={target1+target2+target3} animate={true} radius={30}
                    data={[
                        { title: 'Aggregation', value: target1, color: '#00008B'},
                        { title: 'Arbitrage', value: target2, color: '#1E90FF' },
                        { title: 'Adaptation', value: target3, color: '#0000FF' },
                    ]}
                    label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
                    labelStyle={{
                        fontSize: '7px',
                        fontFamily: 'sans-serif',
                        fill: 'white',
                      }}
                /> 
                <hr size='10'color='black' ></hr>
                <br></br>
                <h1 className='OverlayHeader'>Part 2</h1>
                <h2 className='OverlayHeader'>These are our thoughts on the way you plan to implement your strategy </h2>
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
                    Watch out!
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
                    You indicated that your company is digitally transformed.
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
                    Scaling non-standard products is hard!
                </h3>
                <p>
                    You indicated that your product is non-standardized and your strategy leans towards aggregation.
                    This is not advisable since you will not be able to scale custom-made products.
                </p>
                <br></br>
                </div> : ''}

            {/* HAVING A CUSTOM-MADE PRODUCT AND USING ARBITRAGE*/}
            {percentage(target2,(target1+target2+target3)) >= 50 && isProductStandardized == "false" ?   
             <div>
                <h3 style={{color: "Green"}}>
                    Specialising non-standard products is easier!
                </h3>
                <p>
                    You indicated that your product is non-standardized and your strategy leans towards arbitrage.
                    Arbitrage favours adapted products since it's much easier to specialise these products.
                </p>
                <br></br>
                </div> : ''}

            {/* HAVING A CUSTOM-MADE PRODUCT AND USING ADAPTATION*/}
            {percentage(target3,(target1+target2+target3)) >= 50 && isProductStandardized == "false" ?   
             <div>
                <h3 style={{color: "Green"}}>
                    Custom-made just for your new market!
                </h3>
                <p>
                    You indicated that your product is non-standardized and your strategy leans towards adaptation.
                    Arbitrage favours non-standardized products since it's much easier to adapt to national preferences with these products.
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
                    You are willing to make significant changes your product and you lean towards Adaptation. 
                    Adaptation tries to achieve local relevance through national focus, so this is a good fit!
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
                    You lean towards Adaptation but you indicated that you are not planning on making significant changes to your product. 
                    Adaptation tries to achieve local relevance through national focus, so this might not be a good fit!
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
                    You are expecting to increase your production volume by a large amount and you lean towards Aggregation. 
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
                    You are expecting to increase your production volume slightly and you lean towards Arbitrage. 
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
                    You are expecting to moderately increase your production volume and you lean towards Adaptation. 
                    Adaptation often requires a moderate increase in production volume, so this is a good fit!
                </p>
                <br></br>
                </div> :
                percentage(target1,(target1+target2+target3)) >= 50 && score1!="1"  ?
                <div>
                <h3 style={{color: "Orange"}}>
                    We need to make more stuff!
                </h3>
                <p>
                    You lean towards Aggregation but you indicated that you are not expecting a large increase in your production volume. 
                    Aggregation tries to achieve economies of scale, so this might not be a good fit!
                </p>
                <br></br>
                </div> :
                percentage(target2,(target1+target2+target3)) >= 50 && score2=="3"  ?
                <div>
                <h3 style={{color: "Orange"}}>
                    Step on the production-brakes!
                </h3>
                <p>
                    You clean towards Arbitrage but you indicated that you are expecting an increase in your production volume by a large amount. 
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
                    You lean towards Adaptation but you indicated that you are expecting only a slight increase in your production volume. 
                    Adaptation often requires a moderate increase in production volume, so this might not be a good fit!
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
                    You are expecting a reduction in cost per unit and you lean towards Aggregation. 
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
                    You are expecting an increase in cost per unit and you lean towards Arbitrage. 
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
                    You are not expecting a change in cost per unit and you lean towards Adaptation. 
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
                    You lean towards Aggregation but you are not expecting a reduction in cost per unit. 
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
                    You lean towards Arbitrage but you are not expecting an increase in cost per unit. 
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
                    You lean towards Adaptation but you are expecting a change in cost per unit. 
                    This might not be a good fit!
                </p>
                <br></br>
                </div> :
                
                ''}

            {/* Willingness to pay */} {/*1= aggregation 2= adaptation  3= arbitrage */}
            {percentage(target1,(target1+target2+target3)) >= 50 && score4=="1"  ?   
            <div>
                <h3 style={{color: "Green"}}>
                    Prices are going up!
                </h3>
                <p>
                    You are expecting customers to pay a higher price and you lean towards Aggregation. 
                    This is a good fit!
                </p>
                <br></br>
                </div> : 
                percentage(target3,(target1+target2+target3)) >= 50 && score4=="2"  ?
                <div>
                <h3 style={{color: "Green"}}>
                    Prices are going down!
                </h3>
                <p>
                    You are expecting customers to pay a lower price and you lean towards Adaptation. 
                    This is a good fit!
                </p>
                <br></br>
                </div> :
                percentage(target2,(target1+target2+target3)) >= 50 && score4=="3"  ?
                <div>
                <h3 style={{color: "Green"}}>
                    Buy all the things!
                </h3>
                <p>
                    You are expecting customers to buy more at the same price and you lean towards Arbitrage. 
                    This is a good fit!
                </p>
                <br></br>
                </div> :
                percentage(target1,(target1+target2+target3)) >= 50 && score4!="1"  ?
                <div>
                <h3 style={{color: "Orange"}}>
                    Watch out!
                </h3>
                <p>
                    You lean towards Aggregation but you indicated that you are not expecting customers to pay a higher price. 
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
                    You lean towards Arbitrage but you indicated that you are not expecting customers to buy more product.
                    This might not be a good fit!
                </p>
                <br></br>
                </div> :
                percentage(target2,(target1+target2+target3)) >= 50 && score4!="3"  ?
                <div>
                <h3 style={{color: "Orange"}}>
                    Watch out!
                </h3>
                <p>
                    You lean towards Adaptation but you indicated that you are not expecting customers to pay a lower price. 
                    This might not be a good fit!
                </p>
                <br></br>
                </div> :
                
                ''}




                <hr size='10'color='black' ></hr>
                <br></br>
                <Button text='Go Again!' color='green' onClick={() => location.reload()}/>
                
        </Overlay> : ''}

        </form>

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
                <label>Is your product standardized or do you adapt it to different markets?</label>
            </div>

            <br></br>

            
            <div className='form-control form-control-radio'>
            <label>standardized</label>
            <input type='radio' value={true} name="isStandardized" onChange={(e) => setProductStandardized(e.currentTarget.value)} />
            </div>
            <div className='form-control form-control-radio'>
            <label>adapted to markets</label>
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
            <label>digitally transformed</label>
            <input type='radio' value="3" name="maturityLevel" onChange={(e) => setMaturityLevel(e.currentTarget.value)} />
            </div>


            <br></br>
            <br></br>

            <div className='question'>
                <label>What's your plan on how to succeed in the new market? (use the sliders to indicate)</label>
            </div>

            <br></br>

            <h3>To achieve scale and scope economies through international standardization</h3> {/* Aggregation */}
            <label>by selling an unchanged product into all markets</label>
            <div className='form-control form-control-range'>
               <input type='range' min="0" max="10" defaultValue="0" onChange={(e) => setTarget1(e.currentTarget.valueAsNumber)} />
            </div>

            <h3>To achieve absolute economies through international specialisation</h3> {/* Arbitrage */}
            <label>by taking advantage of the uniqueness of switzerland as your starting country</label>
            <div className='form-control form-control-range'>
               <input type='range' min="0" max="10" defaultValue="0" onChange={(e) => setTarget2(e.currentTarget.valueAsNumber)} />
            </div>

            <h3>To increase customer willingness to pay for your product</h3> {/* Adaptation */}
            <label>by adapting your product to local market preferences</label>
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
                <label>how do you expect your production volume to change (units produced)?</label> {/*1= aggregation 2= adaptation  3= arbitrage  */}
            </div>  
            <div className='form-control form-control-radio'>
            <label>Big increase</label>
            <input type='radio' value={1} name="score2" onChange={(e) => setScore2(e.currentTarget.value)} /> 
            </div>
            <div className='form-control form-control-radio'>
            <label>Moderate increase</label>
            <input type='radio' value={3} name="score2" onChange={(e) => setScore2(e.currentTarget.value)} />
            </div>
            <div className='form-control form-control-radio'>
            <label>Slight increase</label>
            <input type='radio' value={2} name="score2" onChange={(e) => setScore2(e.currentTarget.value)} />
            </div>
            

            <br></br>

            <div className='question'>
                <label>how do you expect the strategy to affect your cost structure?</label> {/*1= aggregation 2= adaptation  3= arbitrage  */}
            </div> 
            <div className='form-control form-control-radio'>
            <label>Reduction in cost per unit</label>
            <input type='radio' value={1} name="score3" onChange={(e) => setScore3(e.currentTarget.value)} /> 
            </div>
            <div className='form-control form-control-radio'>
            <label>Increase in cost per unit</label>
            <input type='radio' value={2} name="score3" onChange={(e) => setScore3(e.currentTarget.value)} />
            </div>
            <div className='form-control form-control-radio'>
            <label>Not at all</label>
            <input type='radio' value={3} name="score3" onChange={(e) => setScore3(e.currentTarget.value)} />
            </div>

            <br></br>

            <div className='question'>
                <label>How do you expect the strategy to impact the willingness of the customer to pay?</label> {/*1= aggregation 2= adaptation  3= arbitrage  */}
            </div> 
            <div className='form-control form-control-radio'>
            <label>Customers will be willing to pay a higher price</label>
            <input type='radio' value={1} name="score4" onChange={(e) => setScore4(e.currentTarget.value)} /> 
            </div>
            <div className='form-control form-control-radio'>
            <label>Customers will expect a lower price</label>
            <input type='radio' value={2} name="score4" onChange={(e) => setScore4(e.currentTarget.value)} />
            </div>
            <div className='form-control form-control-radio'>
            <label>Customers will be willing to pay the same price, but buy more often</label>
            <input type='radio' value={3} name="score4" onChange={(e) => setScore4(e.currentTarget.value)} />
            </div>

            <br></br>

           <input type='submit' value='Evaluate!' className='btn btn-block'/>
         </form>
    </div>
     )
 }
 
 export default Form
 