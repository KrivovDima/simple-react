import React, {useState} from "react";

const Counter = (props: { count: number }) => {
  return <div>{props.count}</div>
}

const UsersDefault = (props: { users: Array<string> }) => {
  console.log('USERS')
  return (
    <div>
      {props.users.map((u, index) => <div key={index}>{u}</div>)}
    </div>
  )
}

const Users = React.memo(UsersDefault);

export const Example1 = () => {
  let [count, setCount] = useState(0)
  let [users, setUsers] = useState(['Aliya', 'Dasha', 'Masha'])

  return (
    <div>
      <button onClick={() => {setCount(count + 1)}}>+</button>
      <Counter count={count}/>
      <Users users={users}/>
    </div>

  )
}