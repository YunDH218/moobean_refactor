import styled from "styled-components";
import { Link } from "../../../node_modules/react-router-dom/dist/index";
import palette from "../../lib/styles/palette";

const AuthTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LogoSide = styled.div`
  width: 50%;
  height: 100%;
  text-align: center;
  padding-top: 40vh;
  img {
    width: 40%;
  }
`
const FormSide = styled.div`
  width: 50%;
  height: 100%;
  background: ${palette.cyan[2]};
  display: flex;
  justify-content: center;
  align-items: center;
  .form-area {
    width: 400px;
    padding: 2rem;
  }
`


const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateBlock>
      <LogoSide>
        <Link to="/"><img src="img/logo.png" alt="MOOBEAN" /></Link>
      </LogoSide>
      <FormSide>
        <div className="form-area">{children}</div>
      </FormSide>
    </AuthTemplateBlock>
  );
}

export default AuthTemplate;