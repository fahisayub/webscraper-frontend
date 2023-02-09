import { Container, Skeleton, } from "@chakra-ui/react";
import React, { useEffect } from "react";
import ResultTable from "../components/ResultTable";
import HistoryHeader from "../components/HistoryHeader";
import { useDispatch, useSelector } from "react-redux";
import { getHistoryApi } from "../store/historyReducer/history.actions";

const HistoryPage = () => {
  const {isLoading,history}=useSelector((state)=>state.historyReducer);
  const dispatch=useDispatch();

  useEffect(()=>{
    if(history.length===0){

      dispatch(getHistoryApi())
    }
  },[dispatch,history.length])
  return (
    <Container maxW={'full'} >
        <HistoryHeader/>
       {isLoading?<Skeleton maxW='full' m='20px' borderRadius={'10px'} h='100vh' />: <ResultTable urldata={history}/>}

    </Container>
  );
};

export default HistoryPage;
