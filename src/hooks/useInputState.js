import { useState } from 'react';

export default intitialValue => {
    const [value, setValue] = useState(intitialValue);
    const handleChange = e => {
        setValue(e.target.value);
    }
    const reset = () => {
        setValue("")
    }
    return [value, handleChange, reset]
}