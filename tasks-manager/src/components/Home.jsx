import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useState } from 'react'
import  Login  from './Login'



        

export default function Home() {
     const [showLogin, setShowLogin] = useState(false)

     const handleLoginButton = () => {
        setShowLogin(true)
     }
    
    return(
        <>
        <Box >
            <Button variant="contained" color='secondary' onClick={handleLoginButton}>let's start!</Button>
            {showLogin && <Login />}
        </Box>
        </>
    )
}