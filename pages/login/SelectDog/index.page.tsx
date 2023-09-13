import React from "react";
import * as S from "./style";
import BeforeBtn from "components/common/BeforeBtn";
import SelectDogColor from "../components/SelectDogColor"

function SelectDog() {
  return (
    <S.Container>
        <S.Wrapper>
          <BeforeBtn></BeforeBtn>
          <S.Input/>
          <S.P>는(은) 어떻게 생겼나요?</S.P>
        </S.Wrapper>
        <SelectDogColor></SelectDogColor>
    </S.Container>
  );
}

export default SelectDog;