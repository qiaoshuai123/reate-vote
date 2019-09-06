import React, { Component } from 'react';

class List extends Component {
    render() {
        return (
            <div>
              <div className="left">
                  <img src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565935063926&di=93a91a6bd762883367d3c9d545fe3d24&imgtype=0&src=http%3A%2F%2Fimg2.artron.net%2Fauction%2F2012%2Fart001308%2Fd%2Fart0013080680.jpg' alt=""/>
              </div>
              <div className="center">
                  {this.props.startTime}
              </div>
              <div className="right">
                  {this.props.endTime}
              </div>
            </div>
        );
    }
}

export default List;