import AuthForm from "../../components/auth/AuthForm";

const LoginForm = () => {
  // TODO: input 변경 핸들러
  // const onChange = e => {
  //   const { value, name } = e.target;
  // }
  // TODO: 폼 등록 이벤트 핸들러
  // const onSubmit = e => {
  //   e.preventDefault();
  // }
  return (
    <AuthForm
      type="login"
      // onChange={onChange}
      // onSubmit={onSubmit}
    />
  );
}

export default LoginForm;