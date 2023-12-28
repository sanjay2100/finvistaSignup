import React from 'react'
import { TextField } from '@mui/material'

function InputField(props) {
  return (
    <TextField
          required
          id="outlined-required"
          label={props.name} 
          fullWidth
          size='medium'
        />
  )
}

export default InputField
