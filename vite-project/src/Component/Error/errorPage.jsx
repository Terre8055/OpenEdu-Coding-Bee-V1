import React from "react";
import { useNavigate } from 'react-router-dom';

import './error.css'

export default function ErrorPage() {

  const navigate = useNavigate()


  return (
    <div id="error-page">
      <h1 style={{ color: "black" }} className="err-code">ERROR 404</h1>
      <p className="err-message">Sorry, an unexpected error has occurred.</p>
      <p className="err-type">
           PAGE NOT FOUND
      </p>
      <button type="submit" onClick={(e) => navigate('/')}>RETURN</button>
    </div>
  );
}