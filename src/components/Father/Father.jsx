/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import Reasct from 'react';
import MySelf from '../MySelf/MySelf';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';

const Father = ({ring}) => {
    return (
        <div>
            <h2>Father</h2>
            <section className='flex'>
                <MySelf ring={ring}></MySelf>
                <Sister></Sister>
                <Brother></Brother>
               
            </section>
        </div>
    );
};

export default Father;