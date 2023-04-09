import axios from "axios";
import { useEffect, useState } from "react";

const Data = () => {
  const [contentByServer, setContentByServer] = useState<any[]>();

  // 서버에서 데이터 불러오기
  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/contents");
      setContentByServer(response.data);
    } catch (err) {
      console.log("데이터를 불러오는데 실패했습니다");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log("contentByServer: ", contentByServer);

  return (
    <>
      {contentByServer?.map((item: any) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </>
  );
};

export default Data;
