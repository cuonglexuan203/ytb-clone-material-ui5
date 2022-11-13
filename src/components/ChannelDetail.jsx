import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  // console.log(channelDetail, videos);
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(2,71,125,1) 0%, rgba(3,152,176,1) 79%, rgba(2,110,150,1) 100%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCard
          // onClick={handleClick}
          channelDetail={channelDetail}
          marginTop="-93px"
        />
      </Box>
      <Box display="flex" p={2}>
        <Box
          sx={{
            mr: {
              sm: "100px",
            },
          }}
        >
          <Videos videos={videos} />
        </Box>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
