import {
  Button,
  Flex,
  Heading,
  
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaHistory } from "react-icons/fa";
import { Link } from "react-router-dom";
const HomeHeader = () => {
  return (
    <Flex justifyContent={"space-between"} px="20px" py="10px">
      <Heading size={"lg"}>WCS</Heading>
      <Button as={Link} to="/history" colorScheme="facebook">
        <FaHistory />
        <Text mx='10px'>History</Text>
      </Button>
    </Flex>
  );
};

export default HomeHeader;
