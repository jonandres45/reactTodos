import React from 'react';
import {AppUI} from './AppUI';
import {TodoProvider} from '../TodoContext';
/*const defaultTodos = [
  {text: 'Cortar cebolla', complete: true},
  {text: 'Tomar agua', complete: false},
  {text: 'Estudiar', complete: false},
  {text: 'Comer', complete: false},
  {text: 'jugar', complete: false},
];*/

function App() {

  //espera a que todo se renderice y comienzan estas intruciones
//  React.useEffect(()=>{
//    console.log("Hola");
//  }, [totalTodos]);
  //[] con un arreglo vacio se renderiza solo una vez
  //[totalTodos] esta escuchando a mi variable

  return (
    <TodoProvider>
          <AppUI/>
    </TodoProvider>
  );
}

export default App;
