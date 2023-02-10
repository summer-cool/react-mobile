import React, { useState, useEffect } from 'react'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import PropTypes from 'prop-types'
import routes from './router/index'


App.propTypes = {
    props: PropTypes.object
}

function App(props){
    const [show,setShow] = useState(false)
    useEffect(() => {
        setShow(true)
    }, [])
    let $dom = ''
    if(show){
        document.querySelector('#preAppIndex').style.display = 'none' //隐藏骨架图
        $dom = (
            <HashRouter>
                {renderRoutes(routes)}
            </HashRouter>
        )
    }
    return $dom
}
export default App