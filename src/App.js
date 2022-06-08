import {
  Box,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Heading,
  Input,
} from "@chakra-ui/react";
import { useMoralis } from "react-moralis";

import { Container } from "@chakra-ui/react";
import Auth from "./Auth";
function App() {
  const { authenticate, isAuthenticated, logout, isAuthenticating, authError } =
    useMoralis();

  if (isAuthenticated) {
    return (
      <Container textAlign="center">
        <Heading>You authenticated!</Heading>
        <Button onClick={() => logout()}>Logout</Button>
      </Container>
    );
  }

  return (
    <Container>
      <Heading textAlign="center" mb={10}>
        Twettah
      </Heading>
      {authError && (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>{authError.message}</AlertTitle>
        </Alert>
      )}
      <Auth />
    </Container>
  );
}

export default App;
