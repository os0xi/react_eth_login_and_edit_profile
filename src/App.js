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
    isAuthUndefined,
    logout,
    isAuthenticating,
    authError,
  } = useMoralis();

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
