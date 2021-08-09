import React from 'react'
import NavBar from './NavBar'
import Notify from './Notify'
import Modal from './Modal'

function Layout({children}) {
    return (
        <div className="con">
            <NavBar />
            <Notify />
            <Modal />
            {children}
        </div>
    )
}

export default Layout
