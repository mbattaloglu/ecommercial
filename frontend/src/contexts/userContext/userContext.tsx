import { createContext, useState } from "react";
import { User } from "../../types/user";

type UserContextProps = {
  user: User | null;
  setUser: (user: User) => void;
  unsetUser: () => void;
};

type UserProviderProps = {
  children: React.ReactNode;
};

const UserContext = createContext<UserContextProps>({
  user: null,
  setUser: () => {
    throw new Error("Not Initialized");
  },
  unsetUser: () => {
    throw new Error("Not Initialized");
  },
});

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUserState] = useState<User | null>(null);

  const setUser = (user: User): void => {
    console.log("User logged in context");
    setUserState(user);
  };

  const unsetUser = (): void => {
    console.log("User logged out context");
    setUserState(null);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        unsetUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
