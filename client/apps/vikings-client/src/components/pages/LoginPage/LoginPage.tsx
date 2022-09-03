import SignInImage from "./sign-in.svg";

import React from "react";

import { LoginForm } from "../../organisms/LoginForm";
import { AuthTemplate } from "../../templates";

const LoginPage = () => {
	return <AuthTemplate illustration={SignInImage} authForm={<LoginForm />} />;
};

export { LoginPage };
