import React, { useEffect, useState } from "react";
export const SettingsContext = React.createContext()
export default function Setting (props){
    const [show,setShow]=useState(true)
    const [itemPage,setItemPage]=useState(4)
    const [sortBy,setSortBy] = useState("difficulty");
    const [list, setList] = useState([]);
    const state = {
        list,
        setList,
        show,
        itemPage,
        setShow,
        setItemPage,
        sortBy,
        setSortBy

    }
    useEffect(()=>{
        // console.log(list);
        // console.log(list,'ssss');
        if(list.length>0){
            // console.log('yesssssss');
            localStorage.setItem('list', JSON.stringify(list));
        }
    },[list])
return (

<SettingsContext.Provider value={state}>
    {props.children}
</SettingsContext.Provider>

)

}