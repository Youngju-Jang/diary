import React, { useEffect, useState } from "react";

const UnmountTest = () => {
  useEffect(() => {
    console.log("MOUNT!");

    return () => {
      // unmount 시점에 실행됨
      console.log("UNMOUNT");
    };
  }, []);
  return <div>UNMOUNT TESTING COMPONENT</div>;
};

const LifeCycle = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => setIsVisible(!isVisible);

  return (
    <div style={{ padding: 20 }}>
      <button onClick={toggle}>ON/OFF</button>
      {isVisible && <UnmountTest />}
    </div>
  );
};
export default LifeCycle;
