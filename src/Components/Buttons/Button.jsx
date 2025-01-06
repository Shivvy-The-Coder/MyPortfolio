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
font-weight: 600;
color: white;
border:1px solid black;
transition:0.3s background ease-in;
border-radius: 7px;
height: 150%;
width: 100%;
cursor: pointer;
       &:hover{
        background-color: #ffffffb2;
        color: black;
        text-shadow: 1 1 1 0.1 white;
        transition: 0ms.3s background ease-in;
       }

`;