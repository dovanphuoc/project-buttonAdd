import React from "react";
import Box from "./Components/Box";
import Button from "./Components/Button";
import './App.scss'
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value : ''
    }
    this.state = {
      jobs : []
    }
  }
  handleChange = (e) => {
    this.setState({value: e.target.value})
  }
  handleClickButton = () => {
    this.setState({
      jobs: [...this.state.jobs, this.state.value]
    })
    this.setState({value: ''})
  }
  render() {
    
    return (
      <div className="wrapper">
        <div className="form">
          <input 
            type="text" 
            placeholder="enter text" 
            value={this.state.value || ''} 
            onChange={this.handleChange}
            className="input"
          />
          <Button name="Add" handleClick={this.handleClickButton} />
        </div>
        <div className="box-wrap">
          {this.state.jobs.map(job => (
            <Box key={Math.random()} children={job} />
          ))}
        </div>
      </div>
    )
  }
}
export default App