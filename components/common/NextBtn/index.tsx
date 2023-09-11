import React from "react";
import Image from "next/image";
import * as S from "./style";

const NextBtn = () => {
    return (
        <S.Container>
            <Image
                src="/NextBtn.svg"
                height={37.5}
                width={37.5}
                alt="Next Button Icon"
            />
        </S.Container>
    );
};

export default NextBtn;
