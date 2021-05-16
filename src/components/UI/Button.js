import styled from "styled-components";

const Button = styled.button`
  width: ${({ variant }) => {
    switch (true) {
      case variant === "square":
        return "176px";
      case variant === "rectangle":
        return "242px";
    }
  }};
  height: ${({ variant }) => {
    switch (true) {
      case variant === "square":
        return "176px";
      case variant === "rectangle":
        return "118.7px";
    }
  }};
  background-image: ${({ image }) => `url(${image})`};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 50px;
  font-weight: bold;
  color: #af753b;
  text-shadow: 0px 0px 2px black;
  transition: background-image 0.2s linear;
  :hover,
  :focus {
    outline: none;
    background-image: ${({ hoverImage }) => `url(${hoverImage})`};
  }

  :disabled {
    filter: grayscale(1);
  }
`;

export default Button;
