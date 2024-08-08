import { createContext, useContext, useState, useEffect, Children } from "react";
import{getCurrentUser} from '../app/lib/appwrite'
const GlobalContext= createContext();
export const useGlobalContext=()=> useContext(GlobalContext);

const GlobalProvider= ({Children})=> {
    const[isLoggedIn, setIsLoggedIn]= useState(false);
    const[user, setUser]= useState(null);
    const[isLoading, setIsLoading]= useState(true);

    useEffect(()=>{
        getCurrentUser()
        .then((res)=>{
            if(res){
                setIsLoggedIn(true);
                setUser(res)
            }else{
                setIsLoggedIn(false)
                setUser(null)
            }

        })
        .catch((error)=>{
            console.log(error);
        })
        .finally(()=>{
            setIsLoading(false)

        })


    },[]);

    return(
        <GlobalContext.Provider
        value={{
            isLoggedIn,
            setIsLoading,
            user,
            setUser,
            isLoading


        }}
        > 
          {Children}
        </GlobalContext.Provider>
    )
}
export default GlobalProvider