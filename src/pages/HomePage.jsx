import { Container, Heading } from "@chakra-ui/react";
import React from "react";
import HomeHeader from "../components/HomeHeader";
import UrlInput from "../components/UrlInput";

const HomePage = () => {
  return (
    <Container maxW={"full"}>
      <HomeHeader />
      <Heading textAlign={"center"}>WebPage Scraper</Heading>
      <UrlInput />
    </Container>
  );
};

export default HomePage;
