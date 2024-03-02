import React, {useState} from 'react';
import styled from "styled-components/native";





export const LoginInputPhone = () => {
    const [inputPhone, setInputPhone] = useState('');
    function changeText(value) {
        setInputPhone(value);
    }
    return (
        <StyledInput
        placeholder="Введите телефон"
        keyboardType="phone-pad"
        value={inputPhone}
        onChangeText={changeText}
        />
);
};
export const LoginInputPassword = () => {
    const [inputPassword, setInputPassword] = useState('');
    function changeText(value) {
        setInputPassword(value);
    }
    return (
            <StyledInput
                placeholder="Введите пароль"
                keyboardType="default"
                secureTextEntry = {true}
                value={inputPassword}
                onChangeText={changeText}
            />
    );
};

const StyledInput = styled.TextInput `
  background-color: white;
  margin: auto;
  border: 1px black;
  min-width: 80%;
  min-height: 12%;
  border-radius: 10px;
  text-align: center;
  justify-content: center;
  margin-bottom: 10px ;
  `
