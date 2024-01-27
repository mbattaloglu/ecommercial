import React from "react";
import { UserProvider } from "../contexts/userContext/userContext";

type ContextWrapperProps = {
  readonly children: React.ReactNode;
};

const ContextWrapper: React.FC<ContextWrapperProps> = ({ children }) => {
  return <UserProvider>{children}</UserProvider>;
};

export default ContextWrapper;
