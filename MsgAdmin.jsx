import {
  useTheme,
  Box,
  Grid,
  TextField,
  Button,
  Typography,
} from '@mui/material'
// import { useDispatch } from 'react-redux'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useRepairsMutation } from '../../slices/departmentSlice'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: '#64b5f6',
      main: '#2196f3',
      dark: '#1976d2',
      contrastText: '#fff',
    },
  },
})

const MsgAdmin = ({ department }) => {
  const { palette } = useTheme()
  // const dispatch = useDispatch()

  const [repairs] = useRepairsMutation()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const message = {
      item: data.get('item'),
      type: data.get('type'),
      message: data.get('message'),
      estimate: data.get('estimate'),
      approved: false,
      department: department,
    }
    console.log(message)

    event.currentTarget.reset()

    const res = await repairs(message).unwrap()
    console.log(res)

    // Assuming `register` and `setCredentials` are defined elsewhere
    // const res = await register(message).unwrap()
    // dispatch(setCredentials({ ...res }))
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <Typography variant='h6' sx={{ color: palette.primary.light, mt: 2 }}>
        Message to Admin for repairs or new items
      </Typography>
      <Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              InputProps={{ sx: { color: 'white' } }}
              InputLabelProps={{
                sx: {
                  '&.Mui-focused': {
                    color: palette.primary.light,
                  },
                  '&.MuiInputLabel-root': {
                    color: palette.grey[300],
                  },
                },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '&:hover fieldset': {
                    borderColor: palette.primary.light,
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: palette.primary.light,
                  },
                },
              }}
              autoComplete='item'
              name='item'
              required
              fullWidth
              id='item'
              label='Item'
              autoFocus
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              InputProps={{ sx: { color: 'white' } }}
              InputLabelProps={{
                sx: {
                  '&.Mui-focused': {
                    color: palette.primary.light,
                  },
                  '&.MuiInputLabel-root': {
                    color: palette.grey[300],
                  },
                },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '&:hover fieldset': {
                    borderColor: palette.primary.light,
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: palette.primary.light,
                  },
                },
              }}
              required
              fullWidth
              id='type'
              label='Complaint/New'
              name='type'
              autoComplete='off'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              InputProps={{ sx: { color: 'white' } }}
              InputLabelProps={{
                sx: {
                  '&.Mui-focused': {
                    color: palette.primary.light,
                  },
                  '&.MuiInputLabel-root': {
                    color: palette.grey[300],
                  },
                },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '&:hover fieldset': {
                    borderColor: palette.primary.light,
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: palette.primary.light,
                  },
                },
              }}
              required
              fullWidth
              id='message'
              label='Message'
              name='message'
              autoComplete='off'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              InputProps={{ sx: { color: 'white' } }}
              InputLabelProps={{
                sx: {
                  '&.Mui-focused': {
                    color: palette.primary.light,
                  },
                  '&.MuiInputLabel-root': {
                    color: palette.grey[300],
                  },
                },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '&:hover fieldset': {
                    borderColor: palette.primary.light,
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: palette.primary.light,
                  },
                },
              }}
              required
              fullWidth
              id='estimate'
              label='Estimate Amount'
              name='estimate'
              autoComplete='off'
            />
          </Grid>
        </Grid>
        <Button
          type='submit'
          fullWidth
          variant='contained'
          sx={{
            background: palette.primary.light,
            color: 'black',
            '&:hover': { background: palette.primary[300] },
            mt: 3,
          }}
        >
          Submit
        </Button>
      </Box>
    </ThemeProvider>
  )
}

export default MsgAdmin
