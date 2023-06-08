# react prop type


### react Ts中的基础类型
1. 定义组建
```js

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

const HelloComp: React.FC<Props> = (props) => {...}

```


1. define
```js
// type extends interface
interface Name { 
  name: string; 
}
type User = Name & { 
  age: number; 
}

/**
 * 
 * 1. type 可以声明基本类型别名，联合类型，元组等类型
 * 2. type 语句中还可以使用 typeof 获取实例的 类型进行赋值
 * let div = document.createElement('div');
type B = typeof div


3. interface 能够声明合并

interface User {
  name: string
  age: number
}

interface User {
  sex: string
}

 
User 接口为 {
  name: string
  age: number
  sex: string 
}


 */

```