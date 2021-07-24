import React from 'react'
import { UnDrawPageNotFound } from '../../asset'
import "../../sass/NotFound.scss"
export default function NotFound() {
    return (
        <div className="NotFoundDiv">
            <img src={UnDrawPageNotFound} alt="Page Not Found" className="NotFoundDivImgUndrawPageNotFound" />
            <p className="NotFoundP">Page Not Found</p>
        </div>
    )
}
