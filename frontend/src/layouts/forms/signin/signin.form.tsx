import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../../components/button/button.component";
import { InputArea } from "../../../components/input-area/input-area.component";
import { useContext, useState } from "react";
import { UserContext } from "../../../contexts/userContext/userContext";
import appStyles from "../../../styles/app.styles.module.scss";
import { sendRequest } from "../../../utils/sendRequest/sendRequest";

export const SigninForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [birthDate, setBirthdate] = useState<Date>(new Date());

  const userContext = useContext(UserContext);
  const { setUser } = userContext;

  const navigate = useNavigate();

  const handleSignIn = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("surname", surname);
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    formData.append(
      "birthDate",
      `${birthDate.getFullYear()}/${
        birthDate.getMonth() + 1
      }/${birthDate.getDate()}`,
    );

    await sendRequest(formData, "signin").then((res) => {
      console.log(res.message);
      if (res.success) {
        setTimeout(() => {
          setUser({
            name: name,
            surname: surname,
            email: email,
            birthDate: birthDate,
          });
          navigate("/");
        }, 1000);
      }
    });
  };
  return (
    <form className={appStyles["shadowed-container"]}>
      <h1 className={appStyles["primary-text"]}>Sign In</h1>
      <InputArea
        title="Name"
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <InputArea
        title="Surname"
        type="text"
        id="surname"
        name="surname"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
        required
      />
      <InputArea
        title="Username"
        type="text"
        id="user"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <InputArea
        title="E-mail"
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
      <InputArea
        title="Password Again"
        type="password"
        id="password-again"
        name="password-again"
        required
      />
      <InputArea
        title="Birth Date"
        type="date"
        id="birthDate"
        name="birthDate"
        value={birthDate.toISOString().split("T")[0]}
        onChange={(e) => setBirthdate(new Date(e.target.value))}
        required
      />
      <Button
        type="submit"
        title="Sign In"
        variant="primary"
        onClick={handleSignIn}
      />
      <div className={appStyles["link-container"]}>
        <Link className={appStyles["link"]} to={"/login"}>
          Already have an account?
        </Link>
      </div>
    </form>
  );
};
