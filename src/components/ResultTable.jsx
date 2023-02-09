import React from 'react';
import {  Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer, } from "@chakra-ui/react";
const ResultTable = () => {
    return (
        <TableContainer>
  <Table variant='simple'>
    <TableCaption>Imperial to metric conversion factors</TableCaption>
    <Thead>
      <Tr>
        <Th>Domain Name</Th>
        <Th isNumeric>Word Count</Th>
        <Th >Favourite</Th>
        <Th >Web-Links</Th>
        <Th >Media-Links</Th>
        <Th >Actions</Th>
      </Tr>
    </Thead>
    <Tbody>
      
      <Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>0.91444</Td>
      </Tr>
    </Tbody>
    <Tfoot>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
    );
};

export default ResultTable;