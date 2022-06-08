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
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import { Container } from "@chakra-ui/react";
import Auth from "./Auth";
import Home from "./Home";
import Profile from "./Profile";
function App() {
  const {
    authenticate,
    isAuthenticated,
    logout,
    isAuthenticating,
    authError,
    user,
  } = useMoralis();

  if (isAuthenticated) {
    return (
      <Container textAlign="center">
        <Heading>Welcome to the Tweetah, {user.attributes.username}!</Heading>
        <Button onClick={() => logout()}>Logout</Button>
      </Container>
    );
  }

  return (
    <Container>
      <Heading textAlign="center" mb={10}>
        Tweetah
      </Heading>
      {isAuthenticated ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      ) : (
        <Navigate replace to="/" />
      )}
      {authError && (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>{authError.message}</AlertTitle>
        </Alert>
      )}
    </Container>
  );
}

export default App;
