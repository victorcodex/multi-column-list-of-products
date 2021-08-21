import styled from "styled-components";

const SelectInput = styled.select`
    position: relative;
    height: 4vh;
    width: 100%;
    border-radius: 1vh;
    border: 1px solid #000000;
    color: #3a2b2b;
    background: #f3f3f3;
    padding: 0;
    text-align: left;
    cursor: pointer;
    outline:0;
`;

const SelectInputLabel = styled.div`
    width: 25%
`;

export {
    SelectInput,
    SelectInputLabel
}