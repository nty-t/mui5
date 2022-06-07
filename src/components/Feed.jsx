
import { Box } from "@mui/material";
import React from "react";
import Post from "./Post";

const Feed = () => {
  return (
    <Box
      sx={{
        // backgroundColor: "pink",
        flex: 4,
        padding: 2
      }}
    >
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </Box>
  );
};

export default Feed;
