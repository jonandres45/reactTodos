import React from 'react';
import './TodoItem.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import CardContent from '@mui/material/CardContent';

const StyleUncomplete = {
    border: 'solid red 1px',
    borderRadius: '10px 10px 10px 10px'
}
const StyleCompleted = {
    border: 'solid green 1px',
    borderRadius: '20px 20px 20px 20px'
}

function TodoItem(props){    
    return (
        <Card style={props.completed ? StyleCompleted : StyleUncomplete}>
            <CardContent className="TodoItem">
                <CardHeader
                    action={
                    <IconButton aria-label="settings" onClick={props.onDelete}>
                        <CloseIcon 
                            className="iconCancelColor"
                        />
                    </IconButton>
                    }
                    title={props.text}
                />
                    <CardActions>                    
                        <Button 
                            size="small" 
                            color={`${props.completed ? 'success' : 'error'}`} 
                            variant="contained"
                            onClick={props.onComplete}
                        >
                            {!props.completed && 
                                <span>Uncomplete</span>
                            }
                            {props.completed && 
                                <span>Completed</span>
                            }
                        </Button>
                </CardActions>
            </CardContent>
        </Card>        
    );
}

//obligamos el nombrado
export { TodoItem };