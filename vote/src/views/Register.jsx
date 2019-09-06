/*
 * @Author: 登陆页面 
 * @Date: 2019-08-15 19:58:11 
 * @Last Modified by: 乔帅
 * @Last Modified time: 2019-08-16 10:18:32
 */
import axios from 'axios'
import React, { Component } from 'react';
class Register extends Component {
    state={
        user:'',
        pwd:''
    }
    render() {
        let {user,pwd} =this.state
        return (
            <div>
                <header>登陆页面</header>
                <form>
                    <div className="form-group">
                        <label >账号</label>
                        <input type="email" value={user} name="user" onChange={this.change.bind(this)} className="form-control" id="exampleInputEmail1" placeholder="账号" />
                    </div>
                    <div className="form-group">
                        <label>密码</label>
                        <input type="password" value={pwd} name="pwd" onChange={this.change.bind(this)} className="form-control" id="exampleInputPassword1" placeholder="密码" />
                    </div>
                    <input className="btn btn-default" onClick={this.btn.bind(this)} type="button" value="登陆" />
                    <input className="btn btn-default" onClick={()=>this.props.history.push('/join')} type="button" value="注册" />
                </form>
            </div>
        ); 
    }
    change(e){
      let user = e.target.name
      let pwd = e.target.value
      this.setState({
        [user]:pwd
      })
    }
    btn(){
        const {user,pwd} =this.state
        console.log(user,pwd)
        axios.post('/login',{
            userName:user,
            password:pwd
        }).then(res=>{
            console.log(res.data)
            if(res.data.code===-1){  
            }else if(res.data.code===1){
              localStorage.setItem("token",res.data.token)
              localStorage.setItem("userId",res.data.userId)
              this.props.history.push('/home')
            }
        })
    }
    
}

export default Register;