import React,{Component} from "react";
import Animate from 'rc-animate'

class Login extends Component{
  state = {
    mobileCode: "",
    userAccount: "",
    hasAlert: false,
    alertText: "",
    password: "",
    codeNumber: "",
    captchaCodeImg: "",
    showPwd: true,
    loginWay: false,
  }
  render(){
    return (
      <Animate transitionName="fade">
        <div className="login-container">
          <Header title="密码登录" goBack={this.goBack} />
          {this.state.loginWay?<form className="login-form">
            <section className="input-container phone-number">
              <input type="text" placeholder="账户密码" name="phone" maxLength="11" value={this.state.mobileCode}></input>
              <button>获取验证码</button>
            </section>
          </form>:
          <form className="login-form">
            <section className="input-container">
              <input type="text" placeholder="账号" value={this.state.userAccount}
                onChange={this.handleInput.bind(this,"userAccount")}></input>
            </section>
            <section className="input-container">
              {this.state.showPwd?<input type="text" placeholder="密码" value={this.state.password} onChange={this.handleInput.bind(this,"password")} />
            :
            <input type="password" placeholder="密码" value={this.state.password} onChange={this.handleInput.bind(this,"password")} />}
            <div className={`button-switch ${this.state.showPwd?'change-to-text':''}`}>
              <div className={`circle-button ${this.state.showPwd?'trans_to_right':''}`} onClick={this.handleInput.bind(this,"password")}></div>
            </div>
            </section>
          </form>
          }
        </div>
      </Animate>
    )
  }
}

export default Login