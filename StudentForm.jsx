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
import { useStudentFeeMutation } from '../../slices/departmentSlice'

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

const StudentForm = ({ department }) => {
  const { palette } = useTheme()
  // const dispatch = useDispatch()

  const [studentFee] = useStudentFeeMutation()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const student = {
      name: data.get('name'),
      regNo: data.get('regNo'),
      graduation: data.get('graduation'),
      semester: data.get('semester'),
      fees: data.get('fees'),
      date: new Date(data.get('date')),
      department: department,
    }
    console.log(student)

    event.currentTarget.reset()

    const res = await studentFee(student).unwrap()
    console.log(res)

    // const res = await register(student).unwrap()
    // dispatch(setCredentials({ ...res }))
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <Typography variant='h6' sx={{ color: palette.primary.light, mt: 2 }}>
        Student Fees Details
      </Typography>
      <Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
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
              InputProps={{ sx: { color: 'white' } }}
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
              autoComplete='name'
              name='name'
              required
              fullWidth
              id='name'
              label='Name'
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
              id='regNo'
              label='Register Number (Reg No)'
              name='regNo'
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
              id='graduation'
              label='Graduation'
              name='graduation'
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
              name='semester'
              label='Semester'
              type='text'
              id='semester'
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
              id='fees'
              label='Fees'
              name='fees'
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
              id='date'
              // label='Date'
              name='date'
              type='date'
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

export default StudentForm
