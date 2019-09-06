import React, { Component } from 'react';
function Intercept(Aa){
    return class List extends Component{
        state={
            isShow:false
        }
        componentDidMount() {
            let store = localStorage.getItem('token')
            if(store){
                this.setState({
                    isShow:true
                })
            }else{
                this.props.history.push('/register')  
            }
        }
        render(){
            let {isShow} =this.state
            return isShow? <Aa/>:''
        }
    }
}
export default Intercept