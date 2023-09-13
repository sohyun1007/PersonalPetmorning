import React from "react";
import * as S from "./style";
import Card from "components/common/Card";

function Profile() {
  return (
    <S.Container>
      <Card description="알림 설정" showAlarm={true} />
      <Card description="서비스 이용약관" showButton={true} />
      <Card description="건의하기" showButton={true} />
      <Card description="로그아웃" color="red" />
      <Card description="탈퇴하기" showButton={true} />
    </S.Container>
  )
}

export default Profile;