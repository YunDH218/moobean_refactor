import styled from "styled-components";
import palette from "../../lib/styles/palette";

const Line = styled.div`
  ${props => props.direction==='vertical' && `
    height: 95%;
    border-left: solid ${props.weight} ${palette.gray[3]};
    margin: auto 1rem;
  `}
  ${props => props.direction==='horizontal' && `
    width: 95%;
    border-top: solid ${props.weight} ${palette.gray[3]};
    margin: 1rem auto;
  `}
  position: relative;
  box-sizing: border-box;
`

const Divider = (props) =>
  <Line direction={props.direction} weight={props.weight} />;

export default Divider