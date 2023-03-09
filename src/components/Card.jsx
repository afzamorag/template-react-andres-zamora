import React from "react";

const Card = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();       
        alert('Longitud no valida')
        }
      
  return(
    <div className="container">
      <h1>The best website for suscribe video-platform</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" placeholder="Insert your name"/>
        <label htmlFor="name">Email</label>
        <input type="text" name="email" id="email" placeholder="Insert your email"/>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
};


export default Card;