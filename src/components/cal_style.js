import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 935px;
  background-color: #fff5f2;
  display: flex;
  align-items: center;
`;

export const Calc = styled.div`
  width: 475px;
  height: 635px;
  background-color: #283d4e;
  border-radius: 25px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const Display = styled.div`
  width: 410px;
  height: 130px;
  background-color: #6d7d8c;
  margin: 30px 0px 0px 30px;
  font-size: 80px;
  text-align: right;
  color: #fff;
`;

export const Nums = styled.div`
  margin: 40px 0px 0px 25px;
  width: 425px;
  height: auto;
  display: flex;
  justify-content: space-between;

  button {
    width: 87px;
    height: 70px;
    text-align: center;
    border: 0;
    outline: 0;
    border-radius: 10px;
    font-size: 48px;
    color: #fff;
  }
`;

export const Number = styled.button`
  background-color: #65bac1;
  border-color: #ff0303;
`;

export const Clear = styled.button`
  background-color: rgb(236, 159, 15);
`;

export const Ops = styled.button`
  background-color: #65bac1;
`;
