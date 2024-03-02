import React from 'react';
import styled from "styled-components/native";
import {LoginWindow} from "../components/LoginWindow";

export const LoginPage = () => {
    return (
        <StyledLoginPage>
            <LoginWindow/>
        </StyledLoginPage>
    );
};

const StyledLoginPage = styled.View `
  background-color: #f3f2f2;
  height: 100%;
  width: 100%;
  
`
