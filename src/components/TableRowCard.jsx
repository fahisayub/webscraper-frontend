import { Button, IconButton, Td, Text, Tr } from "@chakra-ui/react";
import React from "react";
import { FaStar, FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteHistoryApi, updateHistoryApi } from "../store/historyReducer/history.actions";
const TableRowCard = ({ data }) => {
  const dispatch = useDispatch();

  const favHandler = () => {
    let fav = !data.favourite;
    let payload = {
      ...data,
      favourite: fav,
    };
    dispatch(updateHistoryApi(payload));
  };
  const deleteHandler=()=>{

    dispatch(deleteHistoryApi(data._id))
  }
  return (
    <Tr>
      <Td>{data.url}</Td>
      <Td fontSize={"xl"} fontWeight={"bold"}>
        {data.count}
      </Td>
      <Td>{data?.favourite ? "true" : "false"}</Td>
      <Td>
        {data.links.map((link, i) => {
          return <Text key={i}>{link.href}</Text>;
        })}
      </Td>
      <Td>
        {data.media.map((link, i) => {
          return <Text key={i}>{link.src}</Text>;
        })}
      </Td>
      <Td>
        <Button  colorScheme="blue" m="10px" onClick={favHandler}>
          <FaStar color={data?.favourite ? "orange" : "white"} />{" "}
          {data?.favourite ? "Remove from Favourite" : "Add to Favourite"}
        </Button>
        <IconButton colorScheme="red" m="10px" icon={<FaTrash />} onClick={deleteHandler} />
      </Td>
    </Tr>
  );
};

export default TableRowCard;
