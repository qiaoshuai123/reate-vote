import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import routers from './routers'
import RouterViews from './RouterViews'
function Router(){
    return <BrowserRouter>
            <RouterViews routers={routers}/>
    </BrowserRouter>
}
export default Router