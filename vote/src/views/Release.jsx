import React, { Component } from 'react';
import '../mock/mock.js'
import axios from '../utils/axios'
import List from '../components/List'
class Release extends Component {
    state={
        dataList:[],
        showList:[],
        num:0,
        itemList:[{id:1,name:"全部"},{id:2,name:"已完成"},{id:3,name:"正在进行"}]
    }
    componentDidMount(){
        axios.get('/vote/allVote').then(res=>{
            console.log(res.data)
            this.setState({
                dataList:res.data,
                showList:res.data,
                num:1
            })
        })
    }
    render() {
        let {showList,itemList,num} =this.state
        return (
            <div className="wrap">
               <header className="head">
                   <div className="left" onClick={()=>this.props.history.push('/home')}>＜</div>
                   <div className="center">肖战</div>
                   <div className="right" onClick={()=>this.props.history.push('/vote')}>发起投票</div>
               </header>
               <div className="navv">
                        <div className="navvx">
                        {
                            itemList.map(item=><div style={{background:num===item.id?"red":"",color:num===item.id?"white":""}} onClick={()=>this.btn(item.id)} key={item.id}>{item.name}</div>)
                        }
                        </div>
                    </div>
                <main className="main">
                    <div>
                        {
                            showList.map((item=><List {...item} key={item.voteId}/> ))
                        }
                    </div>
                </main>
            </div>
        );
    }
    btn=(num)=>{
        let nowData =new Date()*1
        this.setState({
            num:num
        })
       if(num===2){
            let dataList =this.state.dataList
            this.setState({
                showList:dataList.filter(item=>new Date(item.endTime)*1<nowData)
            })
       }else if(num===3){
        let dataList =this.state.dataList
        this.setState({
            showList:dataList.filter(item=>new Date(item.endTime)*1>nowData)
        })
       }else{
        let dataList =this.state.dataList
            this.setState({
                showList:dataList
            })
       }
    }
}

export default Release;