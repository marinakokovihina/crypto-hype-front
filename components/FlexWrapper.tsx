import styled from "styled-components/native";

type FlexWrapperPropsType = {
    direction?: string
    justify?: string
    align?: string
    wrap?: string
    margin?: string
}

export const FlexWrapper = styled.View<FlexWrapperPropsType>`
    display: flex;
    flex-direction: ${props => props.direction || "column"};
    justify-content: ${props => props.justify || "flex-start"};
    align-items: ${props => props.align || "stretch"};
    flex-wrap: ${props => props.wrap || "nowrap"};
    margin: ${props => props.margin || "0"};
    
`
