import styled from "styled-components";

export const Form = styled.form`
    background-color: #fff;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    flex-wrap: wrap;
`;

export const LabelForm = styled.label`
    padding: 10px;
    border: 1px solid #555;
    border-radius: 10px;
    display: inline-block;
    text-align: center;

    span {
        padding: 0 5px;
        color: #000;
        display: block;
        margin-top: -25px;
        background-color: #fff;
        max-width: min-content;
    }
`;

export const InputForm = styled.input`
    border: none;
    outline: none;
    text-align: center;

    transition: 300ms;

    &:focus {
        font-weight: bold;
        color: red;
    }
`;

export const Select = styled.select`
    border: none;
    outline: none;
`;

export const BtnForm = styled.button`
    border: none;
    background-color: #A00;
    color: #FFF;
    padding: 10px;
    border-radius: 10px;
`;
