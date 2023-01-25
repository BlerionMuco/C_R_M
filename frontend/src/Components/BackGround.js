import React from 'react'
import "./style/BackGround.css"

const BackGround = ({ children }) => {
    return (
        <div>
            <div className="context">
                {children}
            </div>
            <div className="area" >
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div >
        </div>
    )
}

export default BackGround