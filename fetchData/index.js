import { useDb } from './../context/dbContext';
import { useState } from 'react';

const currentRound = 0;


export const useValue = (string) => {
    const {db, ref, set, onValue} = useDb()
    const [value, setValue] = useState()
    const thisRef = ref(db, string);

    onValue(thisRef, (e) => {
        const data = e.val();
        if ( JSON.stringify(data) !== JSON.stringify(value) ) {
          setValue(data)
        }
    })

    const updateValue = (v) => {
        set(thisRef, v)
    }

    return [value, updateValue]
}

//Shortcuts for common usage
export const useSomething = () => useValue("something")
export const useSomthingNested = () => useValue("config/something")
export const useSomethingVariabellyNested = (variable) => useValue(`${variable}/something`)
