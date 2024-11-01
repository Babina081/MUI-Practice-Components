import { Avatar, Box, Skeleton, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function MuiSkeleton() {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
        setloading(false)
    },3000)
  }, [loading])
  
  return (
    <>
      <Box sx={{ width: "250px" }}>
        {loading ? (
          <Skeleton
            variant="rectangular"
            width={250}
            height={125}
            animation="wave"
          ></Skeleton>
        ) : (
          <img
            src="https://picsum.photos/id/237/200/300"
            alt="skeleton"
            width={250}
            height={125}
          />
        )}
        <Stack
          direction={"row"}
          spacing={1}
          sx={{ width: "100%", marginTop: "12px" }}
        >
          {loading ? (
            <Skeleton
              variant="circular"
              width={40}
              height={40}
              animation="wave"
            ></Skeleton>
          ) : (
            <Avatar>V</Avatar>
          )}
        </Stack>
        <Stack sx={{ width: "80%" }}>
          {loading ? (
            <>
              <Typography variant="body1">
                <Skeleton
                  variant="text"
                  width={"100%"}
                  animation="wave"
                ></Skeleton>
              </Typography>
              <Typography variant="body2">
                <Skeleton
                  variant="text"
                  width={"100%"}
                  animation="wave"
                ></Skeleton>
              </Typography>
            </>
          ) : (
            <Typography variant="body1">React MUI Tuts</Typography>
          )}
        </Stack>
      </Box>
      {/* <Stack spacing={1} width={"250px"}>
        <Skeleton variant="text" animation={false}></Skeleton>
        <Skeleton
          variant="circular"
          width={50}
          height={50}
          animation="wave"
        ></Skeleton>
        <Skeleton
          variant="rectangular"
          width={250}
          height={125}
          animation="wave"
        ></Skeleton>
      </Stack> */}
    </>
  );
}
