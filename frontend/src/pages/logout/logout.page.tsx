import { useContext, useEffect } from "react";
import appStyles from "../../styles/app.styles.module.scss";
import { UserContext } from "../../contexts/userContext/userContext";
import { useNavigate } from "react-router-dom";
import { PageCentralContainer } from "../../layouts/containers/page-container-central/page-central.container";

const Logout: React.FC = () => {
  const userContext = useContext(UserContext);
  const { unsetUser } = userContext;

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      unsetUser();
      navigate("/");
    }, 1000);
  });

  return (
    <PageCentralContainer>
      <div
        className={appStyles["shadowed-container"]}
        style={{
          width: "30rem",
          height: "20rem",
        }}
      >
        <img
          src={`${process.env.PUBLIC_URL}/loading-spinner.svg`}
          alt="loading-spinner"
        />
        <h2 className={appStyles["primary-text"]}>Logging Out...</h2>
      </div>
    </PageCentralContainer>
  );
};

export default Logout;
