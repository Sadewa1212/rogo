import React from 'react'
import { FakeAuth } from '../../module'
import { useAuth } from '../context'
export default function Splash() {
    const auth: FakeAuth = useAuth;
    return (
        <div>
            {
                auth.isLogin
            }
        </div>
    )
}
