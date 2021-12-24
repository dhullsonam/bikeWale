import React, {createContext, useState} from 'react';

export const AppContext = createContext();

const {Provider} = AppContext;

const DataProvider = (props) => {
    const [message, setMessage] = useState('');

    const inputValueHandler = (e) => {
        console.log(e.target.value)
        setMessage(e.target.value)
    }
    return (
        <div>
            <Provider value={[message, setMessage]}>
                <input placeholder={"Enter some Text"} onChange={inputValueHandler}/>
                {props.children}
            </Provider>

        </div>
    );
};

export default DataProvider;