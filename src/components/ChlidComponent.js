import React from 'react';
import Button from "@mui/material/Button";

const ChlidComponent = (props) => {

    return (
        <div>
            <Button variant={"contained"} size={"small"} onClick={props.myInfo}>clickMe</Button>
        </div>
    );
};

export default ChlidComponent;