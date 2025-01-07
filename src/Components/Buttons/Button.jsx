import React from 'react'
import styled from "styled-components"

const Button = ({name}) => {
  return (
    <div>
        <Buttons>{name}</Buttons>
    </div>
  )
}
export default Button;



const Buttons=styled.div`
background-color: transparent;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
font-weight: 400;
color: white;
border:1px solid white;
box-shadow: 0px 0px 200px 3px white;
transition: background-color 0.4s ease-in, color 0.4s ease-in;
transition:0.4s color ease-in;
border-radius: 7px;
padding:0.5rem;
cursor: pointer;
       &:hover{
        background-color: #ffffff;
        color: black;
        text-shadow: 1 1 1 0.1 white;
        box-shadow: none;
        border:none;
        font-weight: 500;
        transition: background-color 0.4s ease-in, color 0.4s ease-in;
        /* transition: 1.6s color ease-in; */
       }

`;