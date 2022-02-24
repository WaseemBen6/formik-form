import React from 'react'
import Input from '../Input';
import RadioButton from '../RadioButton';
import Select from '../Select';

export default function FormikControl(props) {
    const { control, ...rest} = props;
  
    switch (control) {
        case "input": return <Input {...rest}/>
            case "select": return <Select {...rest}/>
                case "radio": return <RadioButton {...rest}/>
             default: return null      

    }
  
}
