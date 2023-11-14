import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const SettingsContext = createContext();


const SettingsProvider = ({ children }) => {

    const [settingsData, setSettingsData] = useState();

    useEffect(() => {

        axios.get('settings?platform=web')
            .then(response => {
                // console.log(response.data);
                setSettingsData(response.data);
            })

    }, [])

    return(
        <SettingsContext.Provider value={settingsData}>
            {children}
        </SettingsContext.Provider>
    )

}

export default SettingsProvider;