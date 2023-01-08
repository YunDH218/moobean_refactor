import styled, { css } from "styled-components";
import palette from "../../lib/styles/palette";

const StyledButton = styled.button`
  border: none;
  border-radius: 2px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.5rem 1.25rem;
  color: ${palette.white};
  cursor: pointer;

  background: ${palette.cyan[3]};
  &:hover {
    background: ${palette.cyan[1]};
  }

  ${props =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `
  }
`;

const Button = props => <StyledButton {...props} />;

export default Button;