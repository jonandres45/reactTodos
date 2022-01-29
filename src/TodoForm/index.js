import React from 'react';
import { TodoContext } from '../TodoContext';
import "./TodoForm.css"

function TodoForm(){
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {setOpenModal} = React.useContext(TodoContext);

    const onChange = (event)=>{
        setNewTodoValue(event.target.value);
    };

    const {
        addTodo,
    } = React.useContext(TodoContext);

    const onCancel = ()=>{
        setOpenModal(false);
    };

    const onAdd = (event)=>{
        event.preventDefault();
        addTodo(newTodoValue);
        onCancel();
    };

    return (
        <form onSubmit={onAdd}>
            <label>Escribe un nuevo TODO</label>
            <textarea
                placeholder='Ejemplo de texto'                
                value={newTodoValue}
                onChange={onChange}
            />
            <div className='TodoForm-buttonContainer'>
                <button
                    type='button'
                    onClick={onCancel}
                    className='TodoForm-button TodoForm-button-cancel'
                >
                    Cancelar
                </button>
                <button
                    type='submit'
                    onClick={onAdd}
                    className='TodoForm-button TodoForm-button-add'
                >
                    Añadir
                </button>
            </div>
        </form>
    );
}

export {TodoForm}