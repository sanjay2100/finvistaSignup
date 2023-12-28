import React from 'react'
import { Button,Stack,Box } from '@mui/material'

function ButtonItem(props) {
  return (
    <Stack direction='row' marginTop='15px'>
        <Box width='250%'>

        </Box>
        <Button variant="contained" disableElevation size='small' sx={{
           width:1,
            
            borderRadius:'15px'
        }}>{props.name}</Button>
        </Stack>
  )
}

export default ButtonItem
