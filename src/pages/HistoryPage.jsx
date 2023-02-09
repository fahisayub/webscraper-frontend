import { Container, } from "@chakra-ui/react";
import React from "react";
import ResultTable from "../components/ResultTable";
import HistoryHeader from "../components/HistoryHeader";

const HistoryPage = () => {
  return (
    <Container maxW={'full'}>
        <HistoryHeader/>
        <ResultTable/>

    </Container>
  );
};

export default HistoryPage;
