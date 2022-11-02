import React from 'react';

export default function Alert(props){
    const capitalise=(word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
    // to capitalize 1st letter of a word.
    return(
     props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{props.alert.type}</strong>:{props.alert.msg}
</div>
    )
}
//props.alert && is working as if-else statement 1st props.alert will be checked if its true only then next line 
//will be evaluated.