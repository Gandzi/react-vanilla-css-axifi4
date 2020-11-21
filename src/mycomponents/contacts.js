import React, {useState} from "react";
import "./styles.css";

functon AddPersonForm(props){
  const[person, setPerson] = useState('setPerson');

  function handleChange(e) {
    setPerson(e.target.value);
  }

  function handleSubmit(e) {
    props.handleSubmit(person);
    setPerson("");
    e.preventDefault();
  }

  return(
    
  )

}