import React from "react";
import { useMoralis } from "react-moralis";
import { Container, Button } from "@chakra-ui/react";
import { Navigate, useNavigate } from "react-router-dom";

export default function Home() {
  const { isAuthenticated } = useMoralis();
  const navigate = useNavigate();
  return (
    <Container>
      {isAuthenticated ? "Authenticated" : "Non-authenticated"} home page{" "}
      <Button onClick={(e) => navigate("/profile")}>Profile</Button>
    </Container>
  );
}
