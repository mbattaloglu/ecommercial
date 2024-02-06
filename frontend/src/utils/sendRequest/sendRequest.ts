import { UserRequestResult } from "../../types/userRequestResult";

export const sendRequest = async (
  formData: FormData,
  type: "login" | "signin",
): Promise<UserRequestResult> => {
  switch (type) {
    case "login":
      const loginCredentials = ["username", "password"];
      if (!validateFormData(formData, loginCredentials)) {
        const result: UserRequestResult = {
          message: "Invalid Credentials.",
          success: false,
          user: null,
        };
        return result;
      }

      const loginApiEndpoint = `${process.env.REACT_APP_API_ENDPOINT}login/`;
      if (!loginApiEndpoint) {
        return {
          message: "Invalid API Endpoint",
          success: false,
          user: null,
        };
      }

      const loginResponse = await fetch(loginApiEndpoint, {
        body: formData,
        method: "POST",
      });

      if (!loginResponse.ok) {
        return {
          message: "API Call failed on login.",
          success: false,
          user: null,
        };
      } else {
        const data: UserRequestResult = await loginResponse.json();
        return data;
      }
    case "signin":
      const signinCredentials = [
        "name",
        "surname",
        "username",
        "email",
        "password",
        "birthDate",
      ];
      if (!validateFormData(formData, signinCredentials)) {
        const result: UserRequestResult = {
          message: "Invalid Credentials.",
          success: false,
          user: null,
        };
        return result;
      }

      const signinApiEndpoint = `${process.env.REACT_APP_API_ENDPOINT}signin/`;
      if (!signinApiEndpoint) {
        return {
          message: "Invalid API Endpoint",
          success: false,
          user: null,
        };
      }

      const signinResponse = await fetch(signinApiEndpoint, {
        body: formData,
        method: "POST",
      });

      if (!signinResponse.ok) {
        return {
          message: "API Call failed on login.",
          success: false,
          user: null,
        };
      } else {
        const data: UserRequestResult = await signinResponse.json();
        return data;
      }
  }
};

const validateFormData = (
  formData: FormData,
  expectedCredentials: string[],
): boolean => {
  expectedCredentials.forEach((credential) => {
    if (!formData.has(credential)) return false;
  });
  return true;
};
