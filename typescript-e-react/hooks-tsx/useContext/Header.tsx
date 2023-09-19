import React from "react";
import { useUser } from "./UserContext";

const Header = () => {
  const {data} = useUser();
  return (
    <>
      <div>Header</div>
      <h1>{data?.nome}</h1>
    </>
  );
};

export default Header;
