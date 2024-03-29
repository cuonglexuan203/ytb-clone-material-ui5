import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link, useParams } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";
import { useState, useEffect } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import ChannelDetail from "./ChannelDetail";

const ChannelCard = ({ channelDetail, marginTop }) => {
  const [subscriber, setSubscriber] = useState(0);
  const channelId = channelDetail?.id?.channelId;
  const id = useParams();
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${channelId}`).then((data) =>
      setSubscriber(data?.items[0])
    );
  }, [channelId]);

  // console.log(id);
  let handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <Box
      sx={{
        boxshadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: {
          xs: "356px",
          md: "320px",
        },
        height: "326px",
        margin: "auto",
        marginTop,
      }}
    >
      <Link
        onClick={id.id ? handleClick : () => {}}
        to={`/channel/${channelDetail?.id?.channelId}`}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            image={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetail?.snippet?.title}
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb: 2,
              border: "1px solid #e3e3e3",
            }}
          />
          <Typography variant="h6">
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{ fontSize: 14, color: "gray", ml: "5px" }} />
          </Typography>
          <Typography
            sx={{
              fontSize: 15,
              fontWeight: 500,
              color: "gray",
            }}
          >
            {isNaN(subscriber?.statistics?.subscriberCount)
              ? parseInt(
                  channelDetail?.statistics?.subscriberCount
                ).toLocaleString("en-US")
              : parseInt(
                  subscriber?.statistics?.subscriberCount
                ).toLocaleString("en-US")}{" "}
            Subscribers
          </Typography>
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
