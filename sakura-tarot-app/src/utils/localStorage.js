import React, { useState, useEffect } from "react";

function getSavedValue (key, initialValue) {
    const savedValue = JSON.parse(localStorage.getItem(key));
    if(savedValue){
        return savedValue
    }
    initialValue;
}

function useLocalStorage (key, initialValue) {

    let [value, setValue] = useState(() => {
        return getSavedValue(key, initialValue);
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value, key])

    return [value, setValue];
}

export default useLocalStorage

// const [username, setUsername] = useState('');

// onChange={(event) => setUsername(event.target.username)}
// username={username}