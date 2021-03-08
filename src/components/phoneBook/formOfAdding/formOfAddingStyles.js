import styled from "styled-components";

export default {
  Button: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    width: 150px;
    height: 100%;
    border-radius: 10px;
    margin: 10px auto 25px;
    text-transform: uppercase;
    cursor: pointer;
    &:hover {
      background-color: rgb(155, 255, 155);
      border-radius: 10px;
    }
    &:focus {
      border-radius: 10px;
      outline: none;
    }
  `,
};
