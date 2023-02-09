import { IconButton, Td, Text, Tr } from "@chakra-ui/react";
import React from "react";
import { FaStar, FaTrash } from "react-icons/fa";

const TableRowCard = () => {
  let weblink = ['https://www.facebook.com/', 'https://twitter.com/',];
  let medialink = ['https://www.facebook.com/', 'https://twitter.com/',];
  return (
    <Tr>
      <Td>yards</Td>
      <Td>0.91444</Td>
      <Td>metres (m)</Td>
      <Td>
        {weblink.map((link, i) => {
          return <Text key={i}>{link}</Text>;
        })}
      </Td>
      <Td>
        {medialink.map((link, i) => {
          return <Text key={i}>{link}</Text>;
        })}
      </Td>
      <Td>
        <IconButton
          colorScheme="blue"
          m="10px"
          icon={<FaStar color="white" />}
        />
        <IconButton colorScheme="red" m="10px" icon={<FaTrash />} />
      </Td>
    </Tr>
  );
};

export default TableRowCard;
