import React, { Component } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
class Home extends Component {
    state={
        dataList:[],
        data:[
            {
            id:1,
            url:'http://pic41.nipic.com/20140508/18609517_112216473140_2.jpg'
            },
            {
                id:2,
                url:'http://pic33.nipic.com/20131007/13639685_123501617185_2.jpg'
            },
            {
                id:3,
            url:'http://pic.58pic.com/58pic/13/16/45/68p58PICJZr_1024.png'
            }
        ],
        ico:[
            {
                icon:'glyphicon glyphicon-home',
                tit:'肖战'
            },
            {
                icon:'glyphicon glyphicon-cloud',
                tit:'肖战'
            },
            {
                icon:'glyphicon glyphicon-asterisk',
                tit:'肖战'
            },
            {
                icon:'glyphicon glyphicon-heart',
                tit:'肖战'
            },
            {
                icon:'glyphicon glyphicon-inbox',
                tit:'肖战'
            },
            {
                icon:'glyphicon glyphicon-lock',
                tit:'肖战'
            },
            {
                icon:'glyphicon glyphicon-picture',
                tit:'肖战1'
            },
            {
                icon:'glyphicon glyphicon-screenshot',
                tit:'肖战'
            }
        ]
    }
    componentDidMount(){
            new Swiper('.swiper-container',{
                autoplay:true,
                delay:1000
            })
    }
    render() {
        let {data,ico} =this.state
        return (
            <div className="wrap">
               <Header></Header>
                <main className="main">
                    <div className="banner">
                        <div className="swiper-container">
                            <div className="swiper-wrapper">
                                {
                                    data.map((item,ind)=><div key={ind} className="swiper-slide">
                                        <img src={item.url} alt=""/>
                                    </div>)
                                }
                            </div>
                        </div>
                    </div>
                    <div className="nav" >
                     {
                         ico.map((item,ind)=><dl key={ind} onClick={()=>this.btn(item.tit)}>
                         <dt><i className= {item.icon}></i></dt>
                         <dd>{item.tit}</dd>
                     </dl>)
                     }
                    </div>
                </main>
                <Footer {...this.props}/>
            </div>
        );
    }
    btn=(name)=>{
       if(name==="肖战1"){
           this.props.history.push('/release')
       }
    }
}

export default Home;