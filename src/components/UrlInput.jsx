import { Box, Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUrlApi } from "../store/urlReducer/url.actions";

const UrlInput = ({isLoading}) => {
  const [url, setUrl] = useState("");
  const dispatch = useDispatch();
  const onChangeHandler = (e) => {
    const url = e.target.value;
    setUrl(url);
  };

  const onSubmitHandler = () => {
    console.log({url});
    dispatch(setUrlApi({url}));
  };
  return (
    <Box mt='100px'>
      <Input
        placeholder="Enter Website URL, eg: http://example.com"
        type="text"
        w='50%'
        size={'lg'}
        textAlign='center'
        variant={'filled'}
        isRequired
        onChange={onChangeHandler}
      />
      <Box>

      <Button m='20px' p='40px' colorScheme="green"size={'lg'} isDisabled={isLoading?true:false} onClick={onSubmitHandler}>{isLoading?"Processing...":'Get Insight'}</Button>
      </Box>
    </Box>
  );
};

export default UrlInput;
