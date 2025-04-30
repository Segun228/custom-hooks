import { useState, useEffect } from 'react';

const useLocalStorage = (key) => {
    const [value, setValue] = useState(null);

    useEffect(() => {
        const item = localStorage.getItem(key);
        setValue(item ? JSON.parse(item) : null);
    }, [key]);


    const setItem = (newValue) => {
        try{
            const valueToStore = JSON.stringify(newValue);
            localStorage.setItem(key, valueToStore);
            setValue(newValue);
        } 
        catch(error){
        console.error('Error setting localStorage:', error);
        }
    };

    const getItem = () => {
        return value;
    };

    const removeItem = () => {
        try {
        localStorage.removeItem(key);
        setValue(null);
        } 
        catch(error){
        console.error('Error removing localStorage:', error);
        }
    };

    return {
        setItem,
        getItem,
        removeItem,
        value,
    };
};

export default useLocalStorage;