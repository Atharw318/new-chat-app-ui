import { Box, Stack } from "@mui/material";
import React from "react";
import { Chat_History } from "../../data";
import { DocMsg, LinkMsg, MediaMgs, ReplyMsg, TextMgs, Timeline } from "./MesgTypes";



const Message = ({menu}) => {
  return (
    <Box p={3}>
      <Stack spacing={3}>
        {[].map((el) => {
          switch (el.type) {
            case "divider":
              //Timeline
              return <Timeline el={el} />;
            case "msg":
              switch (el.subtype) {
                case "img":
                  //img mgs
                  return <MediaMgs el={el} menu={menu}/>;
                case "doc":
                  //Doc mgs
                  return <DocMsg el={el} menu={menu}/>
                case "link":
                  //link mgs
                  return <LinkMsg el={el} menu={menu}/>;
                case "reply":
                  //reply mgs
                  return <ReplyMsg el={el} menu={menu}/>;

                default:
                  //text mgs
                  return <TextMgs el={el} menu={menu}/>;
              }
              break;
            default:
          }
          return <></>;
        })}
      </Stack>
    </Box>
  );
};

export default Message;
