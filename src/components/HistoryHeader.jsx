import { Box, Flex, Heading, IconButton } from "@chakra-ui/react";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const HistoryHeader = () => {
  return (
    <Box p="10px">
      <Flex>
        <IconButton as={Link} to="/" icon={<FaArrowLeft />} left={"0px"} />
      </Flex>
      <Heading textAlign={"center"} fontFamily={"sans-serif"}>
        Web Page Scrap History
      </Heading>
    </Box>
  );
};

export default HistoryHeader;
