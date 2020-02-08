import { TextField } from '@material-ui/core';
import * as React from 'react';
const field = (props) =>{
    return (
        <TextField name={props.name} 
                    value={props.value} 
                    onChange={props.onChange} 
                    onBlur ={props.onBlur} 
                    placeholder={props.placeholder} />
    );
}

export default field;