import styled from "styled-components";

export const StyledLanding = styled.div`
  position: relative;
  padding-top: 15vh;
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 5em;

  // Containers

  .landing-text-split {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .landing-subtext-right {
    width: 30vw;
  }

  .landing-subtext-left {
    width: 65vw;
  }

  .landing-bottom {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: start;
  }

  // Background shape

  .landing-wrapper::after,
  .landing-wrapper::before {
    background-color: #ffc847;
    border-radius: 100%;
    content: "";
    width: 80vw;
    height: 80vw;
    position: absolute;
    z-index: -1;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
    top: 25vh;
    right: 0;
  }

  .landing-wrapper::after,
  .landing-wrapper::before {
    position: absolute;
    width: 60vw;
    height: 60vw;
  }

  .landing-wrapper::before {
    -webkit-clip-path: polygon(0 -0.3%, 0% 100.3%, 100% 100%);
    clip-path: polygon(0 -0.3%, 0% 100.3%, 100% 100%);
  }

  .landing-wrapper::after {
    -webkit-clip-path: polygon(0 0, 0 -200%, 250% -300%, 300% 200%, 200% 200%);
    clip-path: polygon(0 0, 0 -200%, 250% -300%, 300% 200%, 200% 200%);
    -webkit-filter: blur(5vw);
    filter: blur(5vw);
  }

  // Landing letters

  .landing-line-1,
  .landing-line-3 {
    font-family: "Harmond";
    margin: 4vw 3vw -2vw 2vw;
    font-size: clamp(1em, 21vw, 12em);
    position: relative;
    letter-spacing: 0.001rem;
    z-index: 5;
  }

  .landing-line-2,
  .landing-line-4 {
    margin: 0 0 0 5vw;
    letter-spacing: 0.0025rem;
    position: relative;
    z-index: 5;
  }

  .landing-letter {
    letter-spacing: -0.3rem;
  }

  @media (min-width: 700px) {
    padding: 0;
    height: 100%auto;

    .landing-line {
      margin-bottom: 0.1vw;
    }

    .landing-wrapper::after,
    .landing-wrapper::before {
      position: absolute;
      width: 35vw;
      height: 35vw;
    }

    .landing-subtext {
      max-width: 15vw;
    }

    .landing-line-1,
    .landing-line-3 {
      margin: 3vw 2.25vw 0 2vw;
      font-size: clamp(1em, 13vw, 12em);
    }
    .landing-line-2 {
      margin: 0.8vw 0 1.5vw 25vw;
    }
    .landing-line-4 {
      margin: 0.8vw 0 1.5vw 15vw;
    }
  }
`;
