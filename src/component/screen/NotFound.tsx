import React from 'react'
import { UnDrawPageNotFound } from '../../asset'
import "../../sass/NotFound.scss"
export default function NotFound() {
    return (
        <div className="NotFound">
            <img src={UnDrawPageNotFound} alt="Page Not Found" />
            <p>Page Not Found</p>
        </div>
    )
}
