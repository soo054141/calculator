import React from "react";
import {
  Container,
  Calc,
  Display,
  Nums,
  Number,
  Clear,
  Ops,
} from "./cal_style";

class Cal extends React.Component {
  render() {
    return (
      <Container>
        <Calc>
          <Display>0</Display>
          <Nums>
            <Number>7</Number>
            <Number>8</Number>
            <Number>9</Number>
            <Clear>C</Clear>
          </Nums>
          <Nums>
            <Number>4</Number>
            <Number>5</Number>
            <Number>6</Number>
            <Ops>+</Ops>
          </Nums>
          <Nums>
            <Number>1</Number>
            <Number>2</Number>
            <Number>3</Number>
            <Ops>-</Ops>
          </Nums>
          <Nums>
            <Number>0</Number>
            <Ops>=</Ops>
            <Ops>x</Ops>
            <Ops>/</Ops>
          </Nums>
        </Calc>
      </Container>
    );
  }
}
export default Cal;
