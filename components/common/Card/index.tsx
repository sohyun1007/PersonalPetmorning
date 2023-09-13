import React, { FC } from "react";
import Image from "next/image";
import * as S from "./style";

interface CardProps {
    description?: string;
    showButton?: boolean;
    showAlarm?: boolean;
    color?: string;
    imgSrc?: string;
    isNotificationOn?: boolean;
    toggleNotification?: () => void; // 함수 타입 추가
}

const Card: FC<CardProps> = ({ 
    description = "기본설명", 
    showButton = false,
    showAlarm = false, 
    color = "#B0B0B0",
    imgSrc = "/ProfileNextBtn.svg",
    isNotificationOn = false,
    toggleNotification,
}) => {
    return (
      <S.Card>
        <S.Description style={{ color: color }}>{description}</S.Description>
        {showButton && 
          <S.Button>
            <Image src={imgSrc} height={20} width={20} alt="next"/>
          </S.Button>}
        {showAlarm &&
            <S.NotificationToggle onClick={toggleNotification}>
                {isNotificationOn ? 'ON' : 'OFF'}
            </S.NotificationToggle>
        }
      </S.Card>  
    );
};

export default Card;