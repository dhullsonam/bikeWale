import React from 'react';

const RefToVoteEligiblity = (props) => {
    return (
        <div>
            {props.value > 18 ?
                <h2> your Are Eligible</h2>
                : <h2> you Are NotEligible</h2>}
        </div>
    );
};

export default RefToVoteEligiblity;