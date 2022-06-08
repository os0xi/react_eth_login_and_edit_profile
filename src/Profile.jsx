import React, { useState } from "react";
import {
  Container,
  Heading,
  Button,
  Text,
  Stack,
  Box,
  Input,
} from "@chakra-ui/react";
import { useMoralis } from "react-moralis";
import { useNavigate } from "react-router";

export default function Profile() {
  const { logout, user, setUserData, isUserUpdating } = useMoralis();
  const navigate = useNavigate();
  const [username, setUsername] = useState(user.attributes.username);
  const [email, setEmail] = useState(user.attributes.email);
  const [password, setPassword] = useState("");
  const updateUserDetails = () =>
    setUserData({
      username,
      email,
      password: password === "" ? undefined : password,
    });

  return (
    <Box>
      <Heading textAlign={"right"}>
        Welcome, {user.attributes.username}!
      </Heading>
      <Stack spacing={3}>
        <Box>
          <Text>Username</Text>
          <Input
            onChange={(event) => setUsername(event.currentTarget.value)}
            value={username}
          ></Input>
        </Box>
        <Box>
          <Text>Email</Text>
          <Input
            onChange={(event) => setEmail(event.currentTarget.value)}
            value={email}
          ></Input>
        </Box>
        <Box>
          <Text>Password</Text>
          <Input
            onChange={(event) => setPassword(event.currentTarget.value)}
            type="password"
            value={password}
          ></Input>
        </Box>
        <Button isLoading={isUserUpdating} onClick={updateUserDetails}>
          Save
        </Button>

        <Button onClick={(e) => navigate("/")}>Home</Button>
        <Button onClick={() => logout()}>Logout</Button>
      </Stack>
    </Box>
  );
}
