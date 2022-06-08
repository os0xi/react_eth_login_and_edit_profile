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
import { useMoralis } from "react-moralis";

import { Container } from "@chakra-ui/react";
import Auth from "./Auth";
import { Route, Routes, Navigate, Redirect } from "react-router";
import Home from "./Home";
import Profile from "./Profile";
function App() {
  const {
    authenticate,
    isAuthenticated,
    isAuthUndefined,
    logout,
    isAuthenticating,
    authError,
  } = useMoralis();
  // if (isAuthenticated) {
  //   return (
  //     <Container textAlign="center">
  //       <Heading>You authenticated!</Heading>
  //       <Button onClick={() => logout()}>Logout</Button>
  //     </Container>
  //   );
  // }
  return (
    <Container>
      <Heading textAlign="center" m={10}>
        Tweetah
      </Heading>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Home /> : <Auth />} exact />
        <Route
          path="/profile"
          element={
            isAuthenticated ? (
              <Profile />
            ) : (
              !isAuthUndefined && <Navigate to="/" />
            )
          }
          exact
        />
      </Routes>
    </Container>
  );
  // if (isAuthenticated) {
  //   return (
  //     <Container textAlign="center">
  //       <Heading>You authenticated!</Heading>
  //       <Button onClick={() => logout()}>Logout</Button>
  //     </Container>
  //   );
  // }

  // return (
  //   <Container>
  //     <Heading textAlign="center" mb={10}>
  //       Twettah
  //     </Heading>
  //     {authError && (
  //       <Alert status="error">
  //         <AlertIcon />
  //         <AlertTitle>{authError.message}</AlertTitle>
  //       </Alert>
  //     )}
  //     <Auth />
  //   </Container>
  // );
}

export default App;
