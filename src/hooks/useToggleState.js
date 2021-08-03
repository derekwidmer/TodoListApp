import { useState } from 'react';

const useToggleState = (initialValue = false) => {
    const [state, setState] = useState(initialValue);
    const toggle = () => {
        setState(currState => !currState)
    }
    return [state, toggle];
}

export default useToggleState;