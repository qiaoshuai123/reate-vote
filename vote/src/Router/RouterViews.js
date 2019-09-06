import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom'
function RouterViews(props){
    let redList = props.routers.filter(item=>item.redirect)
    let comList = props.routers.filter(item=>!item.redirect)
    return <Switch>
             {
            comList.map((item,ind)=><Route path={item.path} key={ind} 
            render={(props)=><item.component  routers={item.children} {...props}></item.component>} />)
            }
             {
            redList.map((item,ind)=><Redirect from={item.path} key={ind}  to={item.redirect}/>)
             }
        </Switch>
}
export default RouterViews