import React, { useState } from "react";

function TextSearch() {
    const array = ["BlockChain", "Javascript", "Python", "MongoDB"];
    const [list, setList] = useState(array);

    const findHandler = (e) => {
        if (e.target.value === "") {
            setList(array);
            return;
        }
        const filterValue = list.filter(
            (text) => text.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1)
        setList(filterValue);
    }
    
    return (
        <>
            Search:
            <input type="text" name="search" onChange={findHandler} />
            {
                list.map((item, index) => (<div key={index}>{item}</div>))//Displaying Data
            }
        </>
    )
}
export default TextSearch;