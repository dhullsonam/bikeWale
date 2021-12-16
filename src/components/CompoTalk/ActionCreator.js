

import { Button } from '@mui/material';
import React from 'react';
import { useState } from 'react/cjs/react.development';

import Responder from './Responder'

function ActionCreator() {
    const [newValue ,setNewValue] = useState("hello")
    const handleEvent = () => {
      setNewValue("world")
    }
    return (
        <div>
            <Button variant="contained"  onClick={handleEvent}>click me</Button>
            <h2>{newValue}</h2>
        </div>
    )

}
export default ActionCreator;