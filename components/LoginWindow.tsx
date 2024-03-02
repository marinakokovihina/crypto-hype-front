import React from 'react';
import styled from "styled-components/native";
import {StyledText} from "./StyledText";
import {FlexWrapper} from "./FlexWrapper";
import {LoginInputPassword, LoginInputPhone} from "./LoginPage/LoginInput";
import {ButtonStyled} from "./Button";
import {Alert} from "react-native";


type PropsWindowSize = {
    width: string;
    height: string;
}
export const LoginWindow = () => {
    return (

        <StyledLoginWindow height="40%" width="70%">
            <FlexWrapper align="center">
                <StyledText
                    fontSize="20px"
                    marginBottom="20px"> Войти в Крипто Хайп </StyledText>
                <LoginInputPhone/>
                <LoginInputPassword/>
                <ButtonStyled
                    title="Войти в аккаунт"

                />
            </FlexWrapper>
        </StyledLoginWindow>

    );
};

const StyledLoginWindow = styled.View<PropsWindowSize> `
  background-color: #fafafa;
  
  min-height: ${props => props.height || "40%"};
  min-width:  ${props => props.width || "40%"};
  display: flex;
  margin: auto;
  border-radius: 10px;
  flex-direction: column;
  justify-content: center;
`
