/*
 * @Author: 注册页面
 * @Date: 2019-08-15 19:58:38 
 * @Last Modified by: 乔帅
 * @Last Modified time: 2019-08-16 10:05:17
 */
import React, { Component } from 'react';
import axios from 'axios'
class Join extends Component {
    state={
        name:'',
        user:'',
        pwd:'',
        newPwd:''
    }
    render() {
        let {name,user,pwd,newPwd} =this.state
        return (
            <div>
                <header>注册页面</header>
                <form>
                <div className="form-group">
                        <label >真实姓名</label>
                        <input type="email" name="name" value={name} onChange={this.change.bind(this)} className="form-control" id="exampleInputEmail1" placeholder="姓名" />
                    </div>
                    <div className="form-group">
                        <label >账号</label>
                        <input type="email" name="user" value={user} onChange={this.change.bind(this)} className="form-control" id="exampleInputEmail1" placeholder="账号" />
                    </div>
                    <div className="form-group">
                        <label>密码</label>
                        <input type="password" name="pwd" value={pwd} onChange={this.change.bind(this)} className="form-control" id="exampleInputPassword1" placeholder="密码" />
                    </div>
                    <div className="form-group">
                        <label>再次输入密码</label>
                        <input type="password" name="newPwd" value={newPwd} onChange={this.change.bind(this)} className="form-control" id="exampleInputPassword2" placeholder="确认密码" />
                    </div>
                    <input className="btn btn-default" onClick={this.btn.bind(this)} type="button" value="注册"/>
                </form>
            </div>
        );
    }
    btn(){
    let{name,user,pwd,newPwd} =this.state
    console.log(user,pwd,name)
       if(pwd ===newPwd){
       axios.post('/register',{
        userName:user,
        password:pwd,
        realName:name
       }).then(res=>{
           if(res.data.code == 1){
               this.props.history.go(-1)
           }
        //    console.log(res.data)
       })
       }
    }
    change(e){
       let user = e.target.name
       let val =e.target.value
       this.setState({
           [user]:val
       })
    }
}

export default Join;
