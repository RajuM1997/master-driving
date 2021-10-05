// import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Details = () => {
  const { detailsId } = useParams();
  //   const [details, setDetaails] = useState([]);
  //   useEffect(() => {
  //     fetch(`./servicedb.json`)
  //       .then((res) => res.json())
  //       .then((data) => console.log(data));
  //   }, []);
  return (
    <div>
      <h1>Id Number: {detailsId} </h1>
    </div>
  );
};

export default Details;
