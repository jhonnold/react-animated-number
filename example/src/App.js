import React, { useState, useEffect } from 'react';

import AnimatedNumber from '@jhonnold/animated-number';

const rand = () => Math.random();

const App = () => {
    const [number, setNumber] = useState(rand());

    useEffect(() => {
        const interval = setInterval(() => setNumber(rand()), 10000);

        return () => clearInterval(interval);
    }, []);

    return <AnimatedNumber number={number} />;
};

export default App;
