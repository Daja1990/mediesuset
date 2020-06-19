import React, { useState } from 'react';

function Nyheder() {

    const [isShown, setIsShown] = useState(false);

    return (
        <div>
            <h1>Headliner</h1>
            <p>Text text text text</p>
        </div >
    );
}

export default Nyheder;
