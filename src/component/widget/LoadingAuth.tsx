import React from 'react'
import { UnDrawSynchronize } from '../../asset'

export default class LoadingAuth extends React.Component<any> {
    render() {
        return (
            <div className='loading_auth'>
                <img src={UnDrawSynchronize} alt='Loading' />
            </div>
        );
    }
}
