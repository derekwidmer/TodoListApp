import { useState } from 'react';

const useInputState = intitialValue => {
    const [value, setValue] = useState(intitialValue);
    const handleChange = e => {
        setValue(e.target.value);
    }
    const reset = () => {
        setValue("")
    }
    return [value, handleChange, reset]
}
export default useInputState;