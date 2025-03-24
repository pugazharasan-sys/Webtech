import { createContext, useContext } from "react";


const AirtelContext = createContext("")

let UserContext = ({children})=>{

    return(
        <AirtelContext.Provider value={{sim:"airtel",price:200,type:"micro"}}>
            {children}
        </AirtelContext.Provider>
    )
}

export let myHook = ()=>{
    let p = useContext(AirtelContext)
    return p
}

export default UserContext