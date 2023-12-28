import React from 'react'
import { Box } from '@mui/material'
import RightCircle from './RightCircle'
import Signup from '../../../assets/signup.png'

function RightImg() {
    const green = {
        
    }
    return (
        <Box
            sx={{
                height: '100%',
                width: '110%',
                
            }}>
            <RightCircle width={'65%'}  height={'100%'} color={'#1976D2'} left={'-0%'} img={Signup}/>
            <RightCircle width={'68%'}  height={'90%'} color={'#4c96e0'} left={'-0%'} top={'-100%'} index={-1}/>
            <RightCircle width={'70%'}  height={'90%'} color={'#98c2eb'} left={'-0%'} top={'-200%'} index={-2}/>
            <RightCircle width={'72%'}  height={'90%'} color={'#add3f7'} left={'-0%'} top={'-300%'} index={-3}/>
        </Box>
    )
}

export default RightImg
