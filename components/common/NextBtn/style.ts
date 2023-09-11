import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  width: 12.5rem;
  max-width: 6rem;
  z-index: 200;
  height: 6rem;
  min-height: 44px;
  border: 1px solid black;
  border-radius: 100%;
  background-origin: border-box;
  background-clip: content-box, border-box;
`;