import React from "react";
import Image from "next/image";
import * as S from "./style";

const BeforeBtn = () => {
    return (
        <S.Container>
            <Image
                src="/BeforeBtn.svg"
                height={17.5}
                width={17.5}
                alt="Before Button"
            />
        </S.Container>
    );
};

export default BeforeBtn;