import React ,{createContext,useState} from "react";

export const SonamContext = createContext()

const { Provider } = SonamContext;

export const AppProvider = (props) => {

    const [message, setMessage] = useState("My name is Nav");

    return(

        <Provider value={[message, setMessage]}>

            {props.children}

        </Provider>

    );

}