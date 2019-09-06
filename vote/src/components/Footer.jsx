import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
class Footer extends Component {
    render() {
        console.log(this.props)
        return (
            <div className="footer">
                <NavLink to='/home'>首页</NavLink>
                <NavLink to='/dynamic'>沐恩动态</NavLink>
                <NavLink to='/data'>主业资料</NavLink>
                <NavLink to='/chat'>留言板</NavLink>
                <NavLink to='/my'>我</NavLink>
            </div>
        );
    }
}

export default Footer;