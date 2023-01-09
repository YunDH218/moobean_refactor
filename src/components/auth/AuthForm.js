import styled from "styled-components";
import { Link } from "react-router-dom";
import palette from "../../lib/styles/palette";
import Button from "../common/Button";

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: ${palette.white};
    margin-bottom: 2rem;
  }
  text-align: center;
`;
const InputGroup = styled.div`
  box-shadow: ${palette.cyan[3]} 0 0 10px;
  border: solid 1px ${palette.cyan[3]};
  input {
    font-size: 1rem;
    padding: 0 1rem;
    outline: none;
    border: none;
    width: 100%;
    height: 3rem;
  }
  input + input {
    border-top: solid 1px ${palette.cyan[3]};
  }
`
const InputWithTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .tag {
    width: 40%
    font-size: 1rem;
    font-weight: bold;
  }
  input {
    width: 60%;
    height: 2rem;
    display: block;
    font-size: 1rem;
    padding: 0 1rem;
    outline: none;
    border: solid 1px ${palette.cyan[3]};
  }
  & + & {
    margin-top: 1rem;
  }
`
const Footer = styled.div`
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 3px solid ${palette.white};
  display: flex;
  justify-content: space-between;
  a {
    color: ${palette.black};
    font-weight: 600;
    &:hover {
      color: ${palette.white};
    }
  }
`
const ButtonWithMarginTop = styled(Button)`
  margin-top: 2rem;
`
const textMap = {
  login: "로그인",
  register: "회원가입",
};

const AuthForm = ({ type, form, onChange, onSubmit }) => {
  const text = textMap[type];
  return (
    <AuthFormBlock>
      <h3>{text}</h3>
      <form onSubmit={onSubmit}>
        {type === 'login' && (
          <InputGroup>
            <input 
              autoComplete="email"
              name="email"
              placeholder="someone@example.com"
              onChange={onChange}
              value={form.email}
            />
            <input
              autoComplete="new-password"
              name="password"
              placeholder="비밀번호"
              type="password"
              onChange={onChange}
              value={form.password}
            />
          </InputGroup>
        )}
        {type === 'register' && (
          <div>
            <InputWithTag>
              <div className="tag">이메일</div>
              <input 
                autoComplete="email"
                name="email"
                placeholder="someone@email.com"
                onChange={onChange}
                value={form.email}
              />
            </InputWithTag>
            <InputWithTag>
              <div className="tag">비밀번호</div>
              <input
                autoComplete="new-password"
                name="password"
                placeholder="영문/숫자 포함 8~12자"
                type="password"
                onChange={onChange}
                value={form.password}
              />
            </InputWithTag>
            <InputWithTag>
              <div className="tag">비밀번호 확인</div>
              <input
                autoComplete="new-password"
                name="passwordConfirm"
                placeholder="비밀번호 확인"
                type="password"
                onChange={onChange}
                value={form.passwordConfirm}
              />
            </InputWithTag>
            <InputWithTag>
              <div className="tag">닉네임</div>
              <input
                autoComplete="new-password"
                name="nick"
                onChange={onChange}
                value={form.nick}
              />
            </InputWithTag>
          </div>
        )}
        <ButtonWithMarginTop>{text}</ButtonWithMarginTop>
      </form>
      {type === 'login' &&
        <Footer>
          <Link>아이디 찾기</Link>
          <Link>비밀번호 찾기</Link>
          <Link to="/register">회원가입</Link>
        </Footer>
      }
    </AuthFormBlock>
  )
}

export default AuthForm;