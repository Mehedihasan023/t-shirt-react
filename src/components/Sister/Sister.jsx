/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { MoneyContex } from '../Grandpa/Grandpa';

const Sister = () => {
    const [money]= useContext(MoneyContex);
    return (
        <div>
            <h2>Sister</h2>
         <p><small>Grandpa money : {money}</small></p>
        </div>
    );
};

export default Sister;