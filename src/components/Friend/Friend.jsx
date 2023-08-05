/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Friend = ({ring}) => {
    return (
        <div>
            <h2>Friend</h2>
            {ring && <p><small>ring: {ring}</small></p>}
        </div>
    );
};

export default Friend;