import React from 'react'

class LoginControl extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: 'xudeng',
      time: new Date().toLocaleString(),
      isLogin: false
    }
    // this.handleClick = this.handleClick
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount(){
    this.timer = setInterval(()=>{
      this.setState({
        time: new Date().toLocaleString()
      })
    },1000)
  }
  componentWillUnmount(){
    clearInterval(this.timer)
  }
  handleClick(e){
    alert(e.target)
  }
  handleChange(e){
    // console.log(e.target.value,'val')
    this.setState({
      name: e.target.value
    })
    e.preventDefault()
  }
  handleChange2(e){
    this.setState(prestate =>({
      isLogin: !prestate.isLogin
    }))
    e.preventDefault()
  }
  render(){
    let mystyle = {
      position: 'absolute',
      top: '50%',
      left: '50%'
    }
    var text
    if(this.state.isLogin){
      text = <span>退出</span>
    }else{
      text = <span>登录</span>
    }
    return (
      <div style={mystyle} onClick={this.handleClick}>
        <input value={this.state.name} onChange={this.handleChange}></input>
        <span>
          {this.state.time}
        </span>
        <span>
          {this.state.name}
        </span>
        {text}
        <button onClick={this.handleChange2.bind(this)}>修改</button>
      </div>
    )
  }
}

export default LoginControl;