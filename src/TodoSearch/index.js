import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch(/*{searchValue, setSearchValue}*/){
    const {/*searchValue,*/ setSearchValue} = React.useContext(TodoContext); //estos son los props

    const onSearchValueChange = (event)=>{
        setSearchValue(event.target.value);
    }

    return (
        <input 
            placeholder="cebolla" 
            className="TodoSearch"
            onChange={onSearchValueChange}
        />
    );
}

export { TodoSearch };