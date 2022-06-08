import React from "react";
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
  const { logout, user } = useMoralis();
  const navigate = useNavigate();
  console.log(user.attributes.ethAddress);

  return (
    <Box textAlign="center">
      <Stack spacing={3}>
        <Box>
          <Input value={user.attributes.username}></Input>
        </Box>
        <Box>
          <Input value={user.attributes.username}></Input>
        </Box>
        <Box>
          <Input value={user.attributes.username}></Input>
        </Box>
        <Button onClick={(e) => navigate("/")}>Home</Button>
        <Button onClick={() => logout()}>Logout</Button>
      </Stack>
    </Box>
  );
}
