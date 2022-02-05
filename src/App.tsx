import React, { useState } from "react";
import styled from "styled-components";

function App() {
  const [value, setValue] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    //event : any Type
    //어떤 종류의 Element가 onChange 이벤트를 발생시킬지를 특정할 수 있음.
    //위 코드는 HTMLInputElement에 의해서 onChange가 실행됨.
    //React JS의 TS에서는 target 대신 currentTarget을 이용

    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Hello", value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={value}
          onChange={onChange}
          type="text"
          placeholder="username"
        />
        <button>Log ing</button>
      </form>
    </div>
  );
}

export default App;
