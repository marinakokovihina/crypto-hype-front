import React from 'react';
import styled from "styled-components/native";

type StyleButtonPropsType ={
    border?: string
    color?: string
    backgroundColor?: string
    borderRadius?: string
    height?: string
    width?: string
}

export const ButtonStyled = styled.Button <StyleButtonPropsType>`
    //background-color: ${props => props.color || "#F5DF6E"};
    color:#F5DF6E ;
    background-color: #F5DF6E;
    //height: ${props => props.height || "10%"};
    //width : ${props => props.width || "7%"};
    //border: ${props => props.border};
    padding: 10px 20px;
    height: 10%
`
