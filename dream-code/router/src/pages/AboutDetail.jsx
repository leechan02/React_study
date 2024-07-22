import React from "react";
import { useParams } from "react-router-dom";

export default function AboutDetail() {
  const { aboutId } = useParams();
  return <div>AboutDetail {aboutId}</div>;
}
