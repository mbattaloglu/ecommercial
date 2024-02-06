import { PageCentralContainer } from "../../layouts/containers/page-container-central/page-central.container";
import { LoginForm } from "../../layouts/forms/login/login.form";

const Login: React.FC = () => {
  return (
    <PageCentralContainer>
      <LoginForm />
    </PageCentralContainer>
  );
};

export default Login;
