import React, { useState, useRef } from 'react';

import AnimatedNumber from '@jhonnold/react-animated-number';

const App = () => {
    const [number, setNumber] = useState(Math.round(Math.random() * 1000));
    const numberInput = useRef();

    const changeNumber = () => {
        const { value } = numberInput.current;
        setNumber(value);
    };

    const [shouldRound, setShouldRound] = useState(true);
    const [tag, setTag] = useState('h3');
    const [duration, setDuration] = useState(250);
    const [fps, setFps] = useState(60);

    return (
        <div className="container">
            <h1>@jhonnold/react-animated-number</h1>
            <div className="links">
                <a href="https://github.com/jhonnold/react-animated-number">
                    Github
                </a>
                <a href="https://www.npmjs.com/package/@jhonnold/react-animated-number">
                    NPM
                </a>
            </div>
            <AnimatedNumber
                number={number}
                format={shouldRound ? $ => Math.round($) : $ => $}
                component={tag}
                duration={duration}
                fps={fps}
            />
            <div className="options">
                <div>
                    <label>Next Number</label>
                    <input type="number" ref={numberInput} />
                </div>
                <div>
                    <label>Duration (ms)</label>
                    <input
                        type="number"
                        onChange={({ target }) => setDuration(target.value)}
                        value={duration}
                    />
                </div>
                <div>
                    <label>Animation Framerate</label>
                    <input
                        type="number"
                        onChange={({ target }) => setFps(target.value)}
                        value={fps}
                    />
                </div>
                <div>
                    <label>Component</label>
                    <select
                        value={tag}
                        onChange={({ target }) => setTag(target.value)}
                    >
                        <option value="h1">H1</option>
                        <option value="h2">H2</option>
                        <option value="h3">H3</option>
                        <option value="h4">H4</option>
                        <option value="h5">H5</option>
                        <option value="h6">H6</option>
                        <option value="p">P</option>
                        <option value="span">Span</option>
                    </select>
                </div>
                <div>
                    <label>Should Round?</label>
                    <input
                        type="checkbox"
                        checked={shouldRound}
                        onChange={({ target }) =>
                            setShouldRound(!!target.checked)
                        }
                    />
                </div>
                <div>
                    <button onClick={changeNumber}>Animate!</button>
                </div>
            </div>
        </div>
    );
};

export default App;
