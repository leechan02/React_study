import React from "react";
import { useYoutubeApi } from "../context/YoutubeApicontext";
import { useQuery } from "@tanstack/react-query";

export default function ChannelInfo({ id, title }) {
  const { youtube } = useYoutubeApi();
  const { data: url } = useQuery({
    queryKey: ["channel", id],
    queryFn: () => youtube.channelImageURL(id),
    staleTime: 1000 * 60 * 60 * 24,
  });
  return (
    <div className="flex items-center my-4 mb-8">
      {url && <img src={url} alt={title} className="rounded-full w-10 h-10"/>}
      <p className="font-medium text-lg ml-2">{title}</p>
    </div>
  );
}
