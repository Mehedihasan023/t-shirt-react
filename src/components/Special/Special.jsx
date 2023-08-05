/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = ({ring}) => {
const agnti = useContext(RingContext)

    return (
        <div>
            <h2>Special</h2>
            <p><small>ring: {agnti}</small></p>
        </div>
    );
};

export default Special;