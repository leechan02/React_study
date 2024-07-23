import React from "react";
import { useYoutubeApi } from "../context/YoutubeApicontext";
import { useQuery } from "@tanstack/react-query";

export default function ChannelInfo({ id, title }) {
  const { youtube } = useYoutubeApi();
  const { data: url } = useQuery({
    queryKey: ["channel", id],
    queryFn: () => youtube.channelImageURL(id),
  });
  return (
    <div>
      {url && <img src={url} alt={title} />}
      <p>{title}</p>
    </div>
  );
}
