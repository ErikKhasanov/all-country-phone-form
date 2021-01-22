import React from 'react';
import className from 'classnames';
import propTypes from 'prop-types';

import './form.scss'
import Input from '../input'
import PhoneInput from '../phoneInput'

const Form = () => {
    const classes = className(
        'form'
    )

    return(
        <div className='form-wrapper'>
            <h2>Register new account</h2>
            <form className={classes}>
                <Input id='name' label='Name:' withIcon='address-card' iconSize='28px' />
                <PhoneInput id='phone' label='Your Phone:' className='phone'/>
            </form>
        </div>
    )
}

Form.propTypes = {
    classNames: propTypes.string
}

export default Form