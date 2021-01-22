import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './phoneInput.scss'
import './flags32-iso-3166-1-alpha-3.scss'

const countryData = require('../../static/data/country.json')

const PhoneInput = React.forwardRef((props, ref) => {
        const [countryList, setCountryList] = useState(false)

        const {id, className, label, error, ...attrs} = props

        const classes = classNames(
            'input',
            className,
            {error},
        );

        const country = 'rus'

        const selectFlagHandler = () => {
            setCountryList(!countryList)
        }

        function loadCountryList() {
            countryData.map(item => itemList(item))

            function itemList(item) {
                var ul = document.querySelector('.phone-code-list');
                if (item) {
                    var templateLi = `<li class="country-item" data-id="phone-code-selected-item" data-lang="${item.code}" data-code="${item.country_code}">
                                <div class="country-item_icon f32">
                                    <span class="flag ${item.code.toLowerCase()}"></span> 
                                    ${item.code}
                                </div>
                                <div class="country-item_name">
                                    ${item.name}
                                </div>
                                <div class="country-item_code">
                                    +${item.country_code}
                                </div>
                            </li>`
                    ul.insertAdjacentHTML('afterbegin', templateLi)
                } else {
                    return null
                }
            }
        }

    loadCountryList()

        return (
            <div className="input-wrapper">
                <div className="labels-wrapper">
                    {label && <label className="input-label" htmlFor={id}>{label}</label>}
                    {attrs.required && <span className="input-required">Required</span>}
                </div>

                <div className='input-inner'>
                    <div className='select-wrapper'>
                        <div className="selected-flag f32" onClick={() => selectFlagHandler}>
                            <div className={`flag ${country}`}>
                                <div className="arrow"/>
                            </div>
                        </div>
                    </div>

                    <ul className='phone-code-list f32'>
                        <li className='phone-code-list__item'>
                            <span className='phone-code-list__country'>
                                <span className='flag rus'/>
                                RU
                            </span>
                            <span className='phone-code-list__country-name'>
                                Россия
                            </span>
                            <span className='phone-code-list__country-code'>
                                +7
                            </span>
                        </li>


                    </ul>

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

PhoneInput.propTypes = {
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    label: PropTypes.string,
    error: PropTypes.string,
};

PhoneInput.defaultProps = {
    className: '',
    label: '',
    error: '',
};

export default PhoneInput;