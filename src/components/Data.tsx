import { getData } from "api";
import { useQuery } from "react-query";

const Data = () => {
  // useQuery 사용하기
  const { data, isLoading, isError } = useQuery("getSeverData", getData);

  if (isLoading) return <>로딩중입니다</>;
  if (isError) return <>연결이 원활하지 않습니다</>;

  console.log("data: ", data);

  return (
    <>
      {data?.map((item: any) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </>
  );
};

export default Data;
