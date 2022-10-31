import React from "react";

const task = (value) =>{
 return <li>{value}</li>
}
const tasks = [task('arroz'), task('feijão'), task('frango')]
class App extends React.Component {
  render () {
    return (tasks)
  }
}

export default App