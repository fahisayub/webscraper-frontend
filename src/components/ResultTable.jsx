import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import TableRowCard from "./TableRowCard";
const ResultTable = ({urldata}) => {

  return (
    <TableContainer
      borderRadius={"20px"}
      boxShadow={"base"}
      bg={"gray.200"}
      m="10px"
    >
      <Table variant='simple' >
        <TableCaption>Web page scrap history</TableCaption>
        <Thead bg={"gray.300"}>
          <Tr>
            <Th>Domain Name</Th>
            <Th>Word Count</Th>
            <Th>Favourite</Th>
            <Th>Web-Links</Th>
            <Th>Media-Links</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody  >
          {
            urldata.map((data,i)=>{
              return(<TableRowCard key={data?._id||i} data={data}  />)
            })
          }
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Domain Name</Th>
            <Th>Word Count</Th>
            <Th>Favourite</Th>
            <Th>Web-Links</Th>
            <Th>Media-Links</Th>
            <Th>Actions</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export default ResultTable;
