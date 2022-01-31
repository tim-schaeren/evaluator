import React from 'react'
import PropTypes from 'prop-types'

import Button from './Button'


const Header = ({title, onShowForm, showForm}) => {

    return (
        <header>
            <h1>{title}</h1>
            <br></br>
            {showForm ? '' : <Button className='btn btn-block' text='Go!' color='green' onClick={onShowForm}/>}
            {showForm ? '' : 
            <div>
                <br></br>
                <br></br>
                <br></br>
                <h3>Designed and developed by:</h3>
                <p>Tarik Kotry, Ruben Santome Bragado and Tim Schären</p>
            </div>
            }
           
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header
