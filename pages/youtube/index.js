import React, { useEffect, useState } from 'react';
import { Card } from "antd";
import Video from './video'
const YouTubeHome = () => {
  const [newData, setNewData] = useState([])
  const getData = async () => {
    const res = await fetch(
      "https://eb69c8de-c627-47d4-b0bd-246d961cbfd3.mock.pstmn.io/youtube?class=10th&subject=Maths"
    );
    const data = await res.json();
    console.log(data)
    setNewData(data)
  };
  useEffect(() => {
    getData()
  }, [])

  return (<>
    <h1 style={{textAlign: "center"}}>You Tube</h1>
    <Video data={newData} />
  </>
  )
};

export default YouTubeHome;
