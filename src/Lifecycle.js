import React, { useState, useEffect } from 'react';

console.log('Pre-render');

const Lifecycle = () => {
    console.log('Logic render')
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    useEffect(() => {
        console.log('useEffect []');
        return () => {
            console.log('cleanup useEffect []')
        }
    }, [])

    useEffect(() => {
        console.log('useEffect no dependency');
        return () => {
            console.log('cleanup useEffect no dependenct');
        }
    })

    useEffect(() => {
        console.log('useEffect [counter1]');
        return () => {
            console.log('cleanup useEffect [counter1]');
        }
    }, [counter1]);

    useEffect(() => {
        console.log('useEffect [counter2]');
        return () => {
            console.log('cleanup useEffect [couter2]');
        }
    }, [counter2]);

    useEffect(() => {
        console.log('useEffect [counter1, counter2]');
        return () => {
            console.log('cleanup useEffect [counter1, couter2]');
        }
    }, [counter1, counter2]);
   
    
    return (
        <div>
            { console.log('return render') }
            <h1>Clicks c1: {counter1}</h1>
            <h1>Clicks c2: {counter2}</h1>
            <button onClick={() => setCounter1(counter1+1)}>
                Increment c1
            </button>
            <button onClick={() => setCounter2(counter2+1)}>
                Increment c2
            </button>
        </div>
    )
}

export default Lifecycle
