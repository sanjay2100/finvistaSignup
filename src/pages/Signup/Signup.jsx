import React from 'react'
import { Stack, Box } from '@mui/material'
import RightImg from '../../components/Signup/rightside/RightImg'
import SignupForm from '../../components/Signup/FormComponents/SignupForm'
import ButtonAppBar from '../../components/Signup/Appbar/SignupAppbar'
import Partner from '../../components/Signup/Partner/Partner'



function Signup() {
    return (
        <Stack height='98vh' direction='row' sx={{overflow:'hidden'}} >
                <ButtonAppBar/>
            <Stack height='100%' width='100%' direction='column' spacing={0} sx={{
                display:{
                    sm:'none',
                    md:'flex',
                    xs:'none'
                }
            }}  >
                <RightImg />
           
            </Stack>
            <Box 
            width={{md:'50%',sm:'100%',xs:'100%'}} 
            height='100%' 
            display='flex' 
            flexDirection='column' 
            justifyContent='center' 
            paddingRight={{md:'50px',sm:'0px'}} >
                <SignupForm />
            </Box>
        </Stack>
    )
}

export default Signup
