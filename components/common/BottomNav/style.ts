import { MOBILE_VERSION_MAX_WIDTH } from "styles/GlobalStyle";
import styled, { css } from "styled-components";

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: ${MOBILE_VERSION_MAX_WIDTH}px;
  z-index: 110;
  height: 6.2rem;
  min-height: 44px;
  border: 2px solid transparent;
  border-radius: ${({ theme }) => theme.radii.lg}
    ${({ theme }) => theme.radii.lg} 0 0;
  background-image: linear-gradient(#fff, #fff),
    linear-gradient(90deg, #0bd4b4, #01cfea);
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  border-bottom: 0;
  > nav {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 4rem;
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
`;

export const ContainerWhiteSpace = styled.div`
  position: absolute;
  bottom: 0;
  height: 5.6rem;
  min-height: 44px;
`;

export const NavItemAnchor = styled.div<{ $isActive: boolean }>`
  position: relative;

  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  cursor: pointer;
  ${({ $isActive }) =>
    $isActive &&
    css`
      background-color: ${({ theme }) => theme.colors.main};
    `}
`;

export const Dot = styled.div<{ $isActive: boolean }>`
  width: 4px;
  height: 4px;
  background: linear-gradient(90deg, #0bd4b4, #01cfea);
  border-radius: 50%;

  ${({ $isActive }) =>
    !$isActive &&
    css`
      background: transparent;
    `}
`;
