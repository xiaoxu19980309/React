import React from 'react'

class LoginControl extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: 'xudeng'
    }
    // this.handleClick = this.handleClick
  }

  handleClick(){

  }
  render(){
    return (
      <div>
        <input value={this.state.name}></input>
      </div>
    )
  }
}