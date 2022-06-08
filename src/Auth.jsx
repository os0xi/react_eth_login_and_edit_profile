import { Stack } from "@chakra-ui/react";
import React from "react";
import { useMoralis } from "react-moralis";
import { useState } from "react";
import {
  Box,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";

const SignUp = () => {
  const { signup } = useMoralis();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Stack spacing={3}>
      <Input
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
      />
      <Input
        placeholder="password"
        value={password}
        type="password"
        onChange={(e) => setPassword(e.currentTarget.value)}
      />
      <Button onClick={() => signup(email, password, email)}>Sign up</Button>
    </Stack>
  );
};
const LogIn = () => {
  const { login } = useMoralis();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Stack spacing={3}>
      <Input
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
      />
      <Input
        placeholder="password"
        value={password}
        type="password"
        onChange={(e) => setPassword(e.currentTarget.value)}
      />
      <Button onClick={() => login(email, password, email)}>Login</Button>
    </Stack>
  );
};

export default function Auth() {
  const { authenticate, isAuthenticated, logout, isAuthenticating, authError } =
    useMoralis();
  return (
    <Stack spacing={6}>
      <Button isLoading={isAuthenticating} onClick={() => authenticate()}>
        Authenticate via Metamask
      </Button>
      <Text textAlign="center">
        <em>or</em>
      </Text>
      <SignUp />
      <Text textAlign="center">
        <em>or</em>
      </Text>

      <LogIn />
    </Stack>
  );
}
