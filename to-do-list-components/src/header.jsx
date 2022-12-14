import React from 'react';
import Title from './title';
import AnimateTitle from './animateTitle';

export default (theme) => {
    return (
        <div style={{display: "flex", alignItems: "center", justifyContent:"center"}}>
                <Title theme={theme} />
                <AnimateTitle />
        </div>
    )
};

