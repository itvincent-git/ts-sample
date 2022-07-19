// import React from 'react';
// import logo from './logo.svg';
import './App.css';

// 测试函数类型 function type
interface FunctionInterface<A, B> {
  (value: A): B;
  (value: A, type: string): B;
}

const func: FunctionInterface<string, number> = function (value): number {
  return +value
}

// 类型接口
interface TypeInterface {
  key: number;
  value: string;
  option?: string;
}

interface SubTypeInterface extends TypeInterface {
  code: number;
}

// 数组接口
interface ArrayInterface {
  [index: number]: number;
}


function App() {
  const type: TypeInterface = { key: 1, value: "123", option: "doc" }
  const subType: SubTypeInterface = { key: 1, value: "123", option: "doc", code: 100 }
  const nums: ArrayInterface = [1, 2, 3, 4]

  return (
    <>
      {func("1")}
      <p />
      {typeof (func("1"))}
      <p />
      {type.key + ":" + type.value + "~" + type.option}
      <p />
      {subType.key + ":" + subType.value + "~" + subType.option + "-" + subType.code}
      <p />
      {nums}
    </>
  );
}

export default App;
