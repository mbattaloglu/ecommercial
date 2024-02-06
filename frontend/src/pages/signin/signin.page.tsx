import { PageCentralContainer } from "../../layouts/containers/page-container-central/page-central.container";
import { SigninForm } from "../../layouts/forms/signin/signin.form";

const Signin: React.FC = () => {
  return (
    <PageCentralContainer>
      <SigninForm />
    </PageCentralContainer>
  );
};

export default Signin;
