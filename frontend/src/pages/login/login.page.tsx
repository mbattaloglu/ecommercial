import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/button/button.component";
import InputArea from "../../components/input-area/input-area.component";
import appStyles from "../../styles/app.styles.module.scss";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/userContext/userContext";
import { sendRequest } from "../../util/sendRequest/sendRequest";

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  const userContext = useContext(UserContext);
  const { setUser } = userContext;

  const handleLogin = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    await sendRequest(formData, "login").then((res) => {
      if (res.success) {
        setUser(res.user!);
        navigate("/");
      } else {
        console.log("Error");
      }
    });
  };

  return (
    <div className={appStyles["page"]}>
      <div className={appStyles["container"]}>
        <form className={appStyles["shadowed-container"]}>
          <h1 className={appStyles["primary-text"]}>Log In</h1>
          <InputArea
            title="Username"
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <InputArea
            title="Password"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button
            type="submit"
            title="Log In"
            variant="primary"
            onClick={handleLogin}
          />
          <div className={appStyles["link-container"]}>
            <Link className={appStyles["link"]} to={"/signin"}>
              Don't you have an account?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
