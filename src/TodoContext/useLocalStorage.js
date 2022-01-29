import React from 'react';

function useLocalStorage(itemName, initialValue){
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);
    const [error, setError] = React.useState(false);
  
    React.useEffect(()=>{ //despues del render
      setTimeout(()=>{ //se ejecuta despues de 1 segundo simulando una database
        try{
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
        
          if(!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue)); //solo acepta texto, por eso stringify
            parsedItem = [];
          }else{
            parsedItem = JSON.parse(localStorageItem);
          }
  
          setItem(parsedItem);
          setLoading(false);
        } catch(error){
          setError(error);
        }
      }, 1000);
    });
  
    const saveItem = (newItem)=>{
      try{
        const stringyfiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringyfiedItem);
        setItem(newItem);
      }catch(error){
        setError(error);
      }
    }
    
  /*  return [ //esto se recomienda solo si son 2 elementos, el item y su actualizador
      item,
      saveItem
    ];*/
  
    return { //enviamos un objeto porque ya son varios, item, actualizador y estado
      item,
      saveItem,
      loading,
      error
    };
  }

export {useLocalStorage};