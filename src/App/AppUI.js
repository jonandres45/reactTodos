import React from 'react';
import {TodoCounter} from '../TodoCounter';
import {TodoSearch} from "../TodoSearch";
import {TodoItem} from "../TodoItem";
import {CreateTodoButton} from "../CreateTodoButton";
import {TodoContext} from "../TodoContext";
import {Modal} from "../Modal";
import { TodoForm } from '../TodoForm';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {ModalProgress} from "../ModalProgress";

function AppUI(){
    const {
      error, 
      loading, 
      searchedTodos, 
      completeTodo, 
      deleteTodo,
      openModal
    } = React.useContext(TodoContext);
    return (
        <React.Fragment>
          <TodoCounter/>
          <TodoSearch/>

          {/*<TodoContext.Consumer> https://platzi.com/clases/2444-react/40316-usecontext/*/}
            {/*recibimos el objeto value como parametro*/}
                {error && <p>Hubo un error</p>}
                <ModalProgress open={loading}/>
                {(!loading && !searchedTodos.length) && <p>No se encontro ningun TODO</p>}
      
                <Box sx={{ flexGrow: 1 }} mt={5}>
                  <Grid container spacing={2} justifyContent='center'>                    
                      {searchedTodos.map(todo => (
                        <Grid item xs={12} md={10} key={"content-"+todo.text}>
                        <TodoItem 
                          key={todo.text} 
                          text={todo.text}
                          completed={todo.complete}
                          onComplete={()=> completeTodo(todo.text)}
                          onDelete={()=> deleteTodo(todo.text)}
                        />
                        </Grid>
                      ))}
                  </Grid>
                </Box>

          {/*</TodoContext.Consumer>*/}

          {!!openModal && ( //existe y es verdadera?
              <Modal>
                <TodoForm/>
              </Modal>
          )}

        <CreateTodoButton/>
      </React.Fragment>
    );
}

export {AppUI}