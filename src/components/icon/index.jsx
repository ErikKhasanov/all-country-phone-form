import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import '../../static/fontawesome-free-5.15.1-web/css/all.min.css';
import './icon.scss';

const Icon = ({ name, className, onClick, size, disabled }) => {

    const iconSize = size ? {fontSize: `${size}`} : null;

    const classes = classNames(
        'fa',
        `fa-${name}`,
        className,
        {func: onClick},
        {disabled}
    )

    return(
        <i className={classes}
           onClick={disabled ? null : onClick}
           style={iconSize}
        />
    )
};

Icon.propTypes = {
    name: PropTypes.string,
    classNames: PropTypes.string,
    onCLick: PropTypes.func,
    size: PropTypes.string,
}

Icon.defaultProps = {
    name: '',
    className: '',
    onCLick: null,
    size: null
}

export default Icon

