import React from "react";
import Image from "next/image";

const DefaultBackground = () => {
    return (
        <Image
            src="/DefaultBackground.svg"
            width={100}
            height={100}
            alt="Default Background"
        />
    );
};

export default DefaultBackground;
