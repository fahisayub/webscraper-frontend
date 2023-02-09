import { Box, Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUrlApi } from "../store/urlReducer/url.actions";

const UrlInput = () => {
  const [url, setUrl] = useState("");
  const dispatch = useDispatch();
  const onChangeHandler = (e) => {
    const url = e.target.value;
    setUrl(url);
  };

  const onSubmitHandler = () => {
    console.log(url);
    dispatch(setUrlApi(url));
  };
  return (
    <Box>
      <Input
        placeholder="Enter Website URL"
        type="text"
        onChange={onChangeHandler}
      />
      <Button onClick={onSubmitHandler}>Get Insight</Button>
    </Box>
  );
};

export default UrlInput;
