import React from 'react'
import { Box } from '@mui/material'

function RightCircle(props) {
  return (
    <Box
    
      sx={{
         backgroundColor: props.color,
        height: '100%',
        width: props.width,
        aspectRatio: '1:1',
        position: 'relative',
         borderRadius: '0% 50% 50% 0%',
        left: props.left,
        top: props.top,
        zIndex: props.index,

        backgroundImage: `url(${props.img})`,
        backgroundPosition: "50% 50%",
        backgroundSize: '70% 70%',
        backgroundRepeat:'no-repeat',
        objectFit: 'contain',
    //     WebkitBoxShadow: '10px -1px 41px -22px rgba(0, 0, 0, 0.56)',
    // MozBoxShadow: '10px -1px 41px -22px rgba(0, 0, 0, 0.56)',
    // boxShadow: '10px -1px 41px -22px rgba(0, 0, 0, 0.56)',
  // backgroundBlendMode:'multiply'
}}
    >
  {/* {props.img?<img src={props.img} alt='' width='100%' style={{objectFit:'fill',backgroundBlendMode:'multiply'}}/>:null}  */ }
    </Box >
  )
}

export default RightCircle
