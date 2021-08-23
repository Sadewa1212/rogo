import React from 'react'
import { UnDrawSynchronize } from '../../asset'

export default function LoadingAuth() {
    return (
        <div className='loading_auth'>
            <div className='loading_auth_box'>
                <img src={UnDrawSynchronize} alt='Loading'/>
            </div>
        </div>
    )
}
