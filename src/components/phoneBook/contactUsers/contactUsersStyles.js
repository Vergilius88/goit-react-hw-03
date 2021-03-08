import styled from "styled-components";

export default {
  Name: styled.p`
    font-size: 16px;
    font-family: "Lato";
    color: rgb(18, 34, 54);
    font-weight: bold;
    line-height: 1.778;
    text-align: center;
    margin-right: 40px;
  `,
  H2: styled.h2`
    font-size: 30px;
    font-family: "Lato";
    color: rgb(18, 34, 54);
    font-weight: bold;
    line-height: 1.778;
    text-align: center;
  `,
  Ul: styled.ul`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
  `,
  Li: styled.li`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0 5px;
  `,

  Button: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    width: 150px;
    height: 100%;
    border-radius: 10px;
    margin: 20px 5px;
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
