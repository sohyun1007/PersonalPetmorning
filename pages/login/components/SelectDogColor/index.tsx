import React, { useState } from "react";
import Image from "next/image";
import * as S from "./style";
import { pomeranian, chihuahua, maltese, poodle } from "constants/dog-patterns";

type DogPattern = {
    id: number;
    color: string;
    thumb: string;
    src: string;
};

function SelectDogColor() {
    // Set initial states with proper types
    const [selectedDogType, setSelectedDogType] = useState<DogPattern[]>(poodle);
    const [selectedColor, setSelectedColor] = useState<DogPattern | undefined>(
        poodle.find(dog => dog.color === 'brown')
    );

    const handleTypeSelect = (type: DogPattern[]) => {
        setSelectedDogType(type);
        const defaultColor = type.find(dog => dog.color === 'brown') || type[0];
        setSelectedColor(defaultColor);
    }

    return (
        <div>
            {/* Display the selected dog */}
            {selectedColor && <Image src={selectedColor.src} alt={selectedColor.color} width={400} height={325} />}

            {/* Dog color buttons */}
            <div>
                <S.ColorContainer>
                    {selectedDogType.map(dogPattern => (
                        <S.ThumbBtn 
                            key={dogPattern.id} 
                            onClick={() => setSelectedColor(dogPattern)}
                        >
                            <Image src={dogPattern.thumb} alt={dogPattern.color} width={30} height={30} />
                        </S.ThumbBtn>
                    ))}
                </S.ColorContainer>
            </div>

            {/* Dog type buttons */}
            <div>
                <S.BtnContainer>
                    <S.DogSelectBtn onClick={() => handleTypeSelect(poodle)}>
                        <Image 
                            src="/poodleSelect.svg"
                            alt="Poodle"
                            height={75}
                            width={75}
                        />
                    </S.DogSelectBtn>
                    <S.DogSelectBtn onClick={() => handleTypeSelect(maltese)}>
                        <Image 
                            src="/malteseSelect.svg"
                            alt="Maltese"
                            height={75}
                            width={75}
                        />
                    </S.DogSelectBtn>
                    <S.DogSelectBtn onClick={() => handleTypeSelect(pomeranian)}>
                        <Image 
                            src="/pomeranianSelect.svg"
                            alt="Pomeranian"
                            height={75}
                            width={75}
                        />
                    </S.DogSelectBtn>
                    <S.DogSelectBtn onClick={() => handleTypeSelect(chihuahua)}>
                        <Image 
                            src="/chihuahuaSelect.svg"
                            alt="Chihuahua"
                            height={75}
                            width={75}
                        />
                    </S.DogSelectBtn>
                </S.BtnContainer>
            </div>
        </div>
    );
}

export default SelectDogColor;