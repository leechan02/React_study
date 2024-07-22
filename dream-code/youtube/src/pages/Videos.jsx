import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";
import Fake from "../api/fake";

export default function Videos() {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ["videos", keyword],
    queryFn: () => {
      const youtube = new Fake();
      return youtube.search(keyword);
    } });

  return (
    <>
      <div>Video {keyword ? `🔍${keyword}` : "🔥"}</div>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id.videoId} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}
