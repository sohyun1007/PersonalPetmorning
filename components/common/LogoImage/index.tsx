import React from "react";
import Image from "next/image";
const LogoImage = () => {
    return (
        <Image
            src="/LogoImage.svg"
            width={100}
            height={100}
            alt="Logo Image"
        />
    );
};

export default LogoImage;
