import { Container, Heading } from "@chakra-ui/react";
import React from "react";
import HomeHeader from "../components/HomeHeader";
import UrlInput from "../components/UrlInput";
import ResultTable from "../components/ResultTable";
import { useSelector } from "react-redux";

const HomePage = () => {
  const { isLoading, isError, result } = useSelector(
    (state) => state.urlReducer
  );

  return (
    <Container maxW={"full"}>
      <HomeHeader  />
      <Heading textAlign={"center"}m='20px' >WebPage Scraper</Heading>
      <UrlInput isLoading={isLoading} />
      {isError ? (
        <Heading>Something Went Wrong!</Heading>
      ) : result[0]?.count !== undefined ? (
        <>
          <Heading size={"md"}>Result:</Heading>
          <ResultTable urldata={result} />
        </>
      ) : (
        ""
      )}
    </Container>
  );
};

export default HomePage;
