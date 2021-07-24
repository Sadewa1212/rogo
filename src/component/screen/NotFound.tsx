import React from 'react'
import { UnDrawPageNotFound } from '../../asset'

export default function NotFound() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <img src={UnDrawPageNotFound} alt="Page Not Found" style={
                {
                    width: "50%",
                    height: "50%",
                }
            } />
            <p>Page Not Found</p>
        </div>
    )
}
