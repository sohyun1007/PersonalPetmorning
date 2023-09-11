import React from "react";
import Image from "next/image";
import * as S from "./style";

const Header = () => {
    return (
        <S.Container>
            <Image
                src="/Header.svg"
                height={110}
                width={130}
                alt="Header Logo Image"
            />
        </S.Container>
    );
};

export default Header;
