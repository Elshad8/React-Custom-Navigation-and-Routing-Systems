import {createContext,useState,useEffect} from 'react';

const NavigationContext=createContext();


function NavigationProvider({children}){
    const[currentPath,setCurrentPath]=useState('/');

    const handler=()=>{
        setCurrentPath(window.location.pathname);
    };

    useEffect(()=>{
        window.addEventListener('popstate',handler);
        
        
        return()=>{
            window.removeEventListener('popstate',handler);
        }
        
    },[]);

    const navigate=(to)=>{
        window.history.pushState([],'',to);
        setCurrentPath(to);
        
        
        
    }


    return(
        <NavigationContext.Provider value={{navigate,currentPath}}>
            {children}
        </NavigationContext.Provider>
    );

}

export default NavigationContext;
export {NavigationProvider};