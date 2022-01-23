import React from 'react'
import PropTypes from 'prop-types'

import Button from './Button'


const Header = ({title, onShowForm, showForm}) => {

    return (
        <header className='header'>
            <h1>{title}</h1>
            {showForm ? '' : <Button text='Go!' color='green' onClick={onShowForm}/>}
           
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header
