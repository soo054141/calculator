import React, { useEffect, useState } from "react";
import {
  Container,
  Calc,
  Display,
  Nums,
  Number,
  Clear,
  Ops,
} from "./cal_style";

function Cal() {
  const [display, setDisplay] = useState("0");
  const [oper, setOper] = useState("");
  const [calcTemp, setCalcTemp] = useState("");
  const [result, setResult] = useState(0);

  const updateDisplay = (char) => {
    setDisplay(display === "0" ? char : display + char);
  };

  const numBtnClick = (e) => {
    console.log("1");
    updateDisplay(e.target.value);
    setCalcTemp(calcTemp + e.target.value);
  };

  const opsClick = (e) => {
    console.log("2");

    const currentOper = e.target.value;
    if (calcTemp === "") {
      console.log("5");

      // 오퍼레이터 저장소 교체
      // display 마지막 문자열 교체
      if (currentOper === "+") {
        updateDisplay(currentOper);
        setOper(currentOper);
      }
      if (currentOper === "-") {
        console.log("6");
      }
      return;
    }
    if (oper === "+") {
      console.log("4");
      const newResult = result + parseInt(calcTemp);
      setResult(newResult);
      setDisplay(newResult + currentOper);
    } else {
      console.log("3");
      setResult(parseInt(calcTemp));
      updateDisplay(currentOper);
      setOper(currentOper);
    }
    setCalcTemp("");
  };

  const allClear = () => {
    // 모두 초깃값으로 변경
    setDisplay("0");
  };
  return (
    <Container>
      <Calc>
        <Display>{display}</Display>
        <Nums>
          <Number onClick={numBtnClick} value="7">
            7
          </Number>
          <Number onClick={numBtnClick} value="8">
            8
          </Number>
          <Number onClick={numBtnClick} value="9">
            9
          </Number>
          <Clear onClick={allClear}>C</Clear>
        </Nums>
        <Nums>
          <Number onClick={numBtnClick} value="4">
            4
          </Number>
          <Number onClick={numBtnClick} value="5">
            5
          </Number>
          <Number onClick={numBtnClick} value="6">
            6
          </Number>
          <Ops onClick={opsClick} value="+">
            +
          </Ops>
        </Nums>
        <Nums>
          <Number onClick={numBtnClick} value="1">
            1
          </Number>
          <Number onClick={numBtnClick} value="2">
            2
          </Number>
          <Number onClick={numBtnClick} value="3">
            3
          </Number>
          <Ops onClick={opsClick} value="-">
            -
          </Ops>
        </Nums>
        <Nums>
          <Number onClick={numBtnClick} value="0">
            0
          </Number>
          <Ops onClick={opsClick} value="=">
            =
          </Ops>
          <Ops onClick={opsClick} value="x">
            x
          </Ops>
          <Ops onClick={opsClick} value="/">
            /
          </Ops>
        </Nums>
      </Calc>
    </Container>
  );
}
export default Cal;
