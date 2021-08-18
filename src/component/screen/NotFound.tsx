import React from 'react'
import { UnDrawPageNotFound } from '../../asset'
import "../../sass/_not_found.scss"
export default function NotFound() {
    return (
        <div className="not_found">
            <img src={UnDrawPageNotFound} alt="Page Not Found" />
            <p>Page Not Found</p>
        </div>
    )
}
