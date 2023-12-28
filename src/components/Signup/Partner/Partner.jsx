import { Box } from '@mui/material'
import React from 'react'

import Logo from '../../../assets/react.svg'

function Partner() {
    const Style={
        borderRadius:'25%',
        aspectRatio:'1:1',
        width:'60px',
        
        position:'relative',
        padding:'10px',
        zIndex:1
    }
  return (
    <Box>
        <img style={Style} src={Logo} alt='img'/>
    </Box>
  )
}

export default Partner
