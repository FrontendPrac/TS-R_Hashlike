import React, { useEffect, useRef, useState } from "react";

const UseRef = () => {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(count);

  // 버튼 클릭 시 실행하는 함수
  const handleButtonClick = () => {
    setCount(count + 1);
  };

  // count 변경 시 실행하는 함수
  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return (
    <div>
      <span>Count: {count} || </span>
      <span>Previous Count: {prevCountRef.current} || </span>
      <button onClick={handleButtonClick}>클릭</button>
    </div>
  );
};

export default UseRef;
