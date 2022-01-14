import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({title, onAdd, showForm}) => {

    return (
        <header className='header'>
            <h1>{title}</h1>
            {showForm ? '' : <Button text='Go!' color='green' onClick={onAdd}/>}
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header
