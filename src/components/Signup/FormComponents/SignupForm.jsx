import { Stack, Typography,TextField,Button,Box } from '@mui/material'
import React from 'react'
import InputField from './InputField'
import ButtonItem from './ButtonItem'
import Link from '@mui/material/Link';


function SignupForm() {
  return (
    <Stack spacing={2.2}>
        <Typography variant='h4' component='div' fontWeight='600' fontSize='22px'>Sign up</Typography>
        <Typography>Already had an account ? <Link href="#">Login</Link></Typography>
        
        <Box>
        <InputField name={'Mobile Number'}/>
        <ButtonItem name={'Send Otp'}/>
        </Box>
        <Box>
        <InputField name={'One time password'}/>
        </Box>
        <Box>
        <InputField name={'Email ID'}/>
        <ButtonItem name={'Send Code'}/>
        </Box>
        <Box>
        <InputField name={'Code'}/>
        <ButtonItem name={'Next'}/>
        </Box>

    </Stack>
  )
}

export default SignupForm
