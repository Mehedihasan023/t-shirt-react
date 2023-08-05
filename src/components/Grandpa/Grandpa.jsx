/* eslint-disable no-unused-vars */
import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css'

export  const RingContext = createContext('gold');
export const MoneyContex = createContext(0);
const Grandpa = () => {
    const ring ='diamond';
    const [money, setMoney] = useState(0)
    return (
        <div className='grandpa'>
            <h2>grandpa </h2>
            <p>Has money :{money}</p>
            <MoneyContex.Provider value={[money,setMoney]}>
            <RingContext.Provider value='golden ring'>
            <section className='flex'>
                <Father ring={ring}></Father>
                <Uncle></Uncle>
                <Aunty ring={ring}></Aunty>
            </section>
            </RingContext.Provider>
            </MoneyContex.Provider>
          
         
        </div>
    );
};

export default Grandpa; 