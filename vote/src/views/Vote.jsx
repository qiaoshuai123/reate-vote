import React, { Component } from 'react';
import Intercept from './Intercept'
import { DatePicker } from 'antd';
import 'antd/dist/antd.css'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
class Vote extends Component {
    state={
        tit:'',
        chooseList:[],
        anonymity:'',
        isSingle:'',
        conList:'',
        info:'',
        startTime:null,
        endTime:null,
    }
    render() {
        let {tit,chooseList,info,conList,anonymity,isSingle} =this.state
        return (
            <div className="wrap">
                <header className="heade">
                    <div className="left" onClick={()=>console.log(this.props)}>＜</div>
                    <div className="right">肖战</div>
                </header>
                <div className="main">
                    <p> <label htmlFor="">标肖战题</label><input onChange={this.change.bind(this)} value={tit} name="tit" type="text"/></p>
                   <p><label htmlFor="">描述</label><textarea onChange={this.change.bind(this)} value={info} name="info" cols="30" rows="2"></textarea></p>
                   <div className="boxx">
                       {
                           chooseList&&chooseList.map((item,ind)=><p key={ind}>{item}</p>)
                       }
                   </div>
                   <p><input type="text" value={conList} onChange={this.change.bind(this)} name="conList"/><button onClick={this.btn.bind(this)}>+</button></p>
                   <div>
                       <span>是否单选</span>
                       <select onChange={this.change.bind(this)} value={anonymity} name="anonymity">
                        <option value="0">单选</option>
                        <option value="1">多选</option>
                    </select>
                   </div>
                   <div>
                       <span>请选择是否匿名</span>
                       <select onChange={this.change.bind(this)} value={isSingle} name="isSingle">
                        <option value="0">单选</option>
                        <option value="1">多选</option>
                    </select>
                   </div>
                   <div>
                   <DatePicker onChange={this.changeOne.bind(this)} />
                   </div>
                   <div>
                   <DatePicker onChange={this.changeTwo.bind(this)} />
                   </div>
                </div>
                <div className="footer" onClick={this.send.bind(this)}>
                    发布
                </div>
            </div>
        );
    }
    send(){
        let {tit,chooseList,conList,anonymity,isSingle,startTime,endTime} =this.state
        axios.post('/vote/newvote',{
            title:tit,
            userId:'',
            chooseList,
            anonymity:'',
            isSingle:'',
            startTime:'',
            endTime:''
        }).then(res=>{
            console.log(res.data)

        })
    }
    btn(){
        let {conList,chooseList} =this.state
        chooseList.push(conList)
        this.setState({
            chooseList,
            conList:''
        })

    }
    changeOne(date, dateString) {
       this.setState({
        startTime:dateString
       })
      }
      changeTwo(date, dateString) {
        console.log(dateString);
        this.setState({
            endTime:dateString
        })
      }
    
    change(e){
       let user = e.target.name
       let val =e.target.value
       this.setState({
           [user]:val
       })
    }
}

export default withRouter(Intercept(Vote));