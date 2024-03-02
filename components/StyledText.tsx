import styled from "styled-components/native";

type PropsStyledText = {
    fontSize?: string;
    color?: string;
    marginTop?: string;
    marginBottom?: string;
    marginLeft?: string;
    marginRight?: string;
    fontWeight?: string;
}
export const StyledText = styled.Text <PropsStyledText>`
  font-size: ${props => props.fontSize || "15px"};
  color: ${props => props.color || "black"};
  margin-top:  ${props => props.marginTop};
  margin-left : ${props => props.marginLeft};
  margin-bottom : ${props => props.marginBottom};
  margin-right : ${props => props.marginRight};
  font-weight: ${props => props.fontWeight || "normal"};
  font-family: sans-serif;
;
`
