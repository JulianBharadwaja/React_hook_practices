import { ChannelContext, UserContext } from "../../App";
import React, { useContext } from "react";

const ComponentF = () => {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <div>
      {user} - {channel}
    </div>
  );
};

export default ComponentF;
