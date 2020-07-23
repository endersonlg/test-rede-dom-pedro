import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';
export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
  }

  *:focus{
    outline:0;
  }

  html,body,#root{
    height:100%;
  }

  body{
    -webkit-font-smoothing:antialiased;
    
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }

      input[type=number] {
      -moz-appearance: textfield;
    }
  }

  body,input,button,select{
    font:14px 'Roboto',sans-serif;
  }

  a{
    text-decoration:none;
  }

  ul{
    list-style:none;
  }

  button{
    cursor:pointer;
  }
  
`;
