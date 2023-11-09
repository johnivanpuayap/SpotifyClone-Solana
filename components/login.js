import React from 'react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

const styles = {
    loginPage: 'w-screen h-screen bg-white flex justify-center items-center flex-col',
    text: 'text-4xl text-black mb-10'
}

const Login = () => {
    return (
        <div className={styles.loginPage}>
            <p className={styles.text}>Login to access the app</p>
            <WalletMultiButton />
        </div>
    )
}

export default Login