import { React, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  FormInput,
  StyledButton,
  Form,
  Title,
  Anchor,
  InputWrapper,
} from "../../components/formElements";
import { loginRequest } from "../../services/authAPI";
import {
  ContainerText,
  FlexColumnContainer,
} from "../../components/globalContainers";
import { Separator } from "../../components/separator";
import { StyledLink } from "../../components/link";

function LoginContainer(props) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  const SubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const result = await loginRequest({ username, password });
      if (result.ok) {
        history.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <FlexColumnContainer>
      <ContainerText>
        <Title>Log in and start sharing</Title>
        <span>Don't have an account? </span>
        <StyledLink to="/register">
          <Anchor>Sign Up</Anchor>
        </StyledLink>
      </ContainerText>
      <Form onSubmit={SubmitHandler}>
        <Separator></Separator>
        <label>Email Address or Username:</label>
        <InputWrapper>
          <FormInput
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            type="text"
          ></FormInput>
        </InputWrapper>
        <label>Password:</label>
        <InputWrapper>
          <FormInput
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
          ></FormInput>
          <Anchor float="right">Forgot?</Anchor>
        </InputWrapper>
        <StyledButton>Log in</StyledButton>
      </Form>
    </FlexColumnContainer>
  );
}

export default LoginContainer;
