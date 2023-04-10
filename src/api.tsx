import axios from "axios";

// 서버에서 데이터 불러오기
export const getData = async () => {
  try {
    const response = await axios.get("http://localhost:4000/contents");
    return response.data;
  } catch (err) {
    console.log("데이터를 불러오는데 실패했습니다");
  }
};
