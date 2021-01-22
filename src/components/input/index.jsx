import React from 'react';
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Icon from '../icon'

const Input = React.forwardRef ((props, ref) => {

        const {id, className, label, error, withIcon, iconSize, ...attrs} = props

        const classes = classNames(
            'input',
            className,
            { error },
        );

        return (
            <div className="input-wrapper">
                <div className="labels-wrapper">
                    {label && <label className="input-label" htmlFor={id}>{label}</label>}
                    {attrs.required && <span className="input-required">Required</span>}
                </div>
                <div className="input-inner">
                    {withIcon && <Icon name={withIcon} size={iconSize} className='input-icon'/>}
                    <input name={id}
                           id={id}
                           className={classes}
                           ref={ref}
                           {...attrs}
                    />
                </div>
                {error && <span className="input-error">{error}</span>}
            </div>
        );
    }
);

Input.propTypes = {
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    label: PropTypes.string,
    error: PropTypes.string,
};

Input.defaultProps = {
    className: '',
    label: '',
    error: '',
};

export default Input;