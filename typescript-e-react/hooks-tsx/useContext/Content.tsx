import React from "react";
import { useUser } from "./UserContext";

const Content = () => {
  const { data } = useUser();
  return (
    <>
      <div>Content</div>
      <ul>
        <li>playback: {data?.preferencias.playback}</li>
        <li>volume: {data?.preferencias.volume}</li>
        <li>qualidade: {data?.preferencias.qualidade}</li>
      </ul>
    </>
  );
};

export default Content;
