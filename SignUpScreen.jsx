import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import {
  useTheme,
  Box,
  Grid,
  Link,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useRegisterMutation } from '../slices/userApiSlice'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../slices/authSlice'
import { useState } from 'react'

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

export default function SignUp() {
  const { palette } = useTheme()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [register, { isLoading }] = useRegisterMutation()
  const [role, setRole] = useState('')
  const [department, setDepartment] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const user = {
      name: data.get('name'),
      role: data.get('role'),
      department: data.get('department'),
      email: data.get('email'),
      password: data.get('password'),
    }

    const res = await register(user).unwrap()
    dispatch(setCredentials({ ...res }))
    navigate('/')
  }

  const handleRoleChange = (event) => {
    setRole(event.target.value)
  }

  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value)
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: palette.primary.light }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign up
          </Typography>
          <Box
            component='form'
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <TextField
              InputLabelProps={{
                sx: {
                  '&.Mui-focused': {
                    color: palette.primary.light,
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
                mb: 2,
              }}
              autoComplete='name'
              name='name'
              required
              fullWidth
              id='name'
              label='Name'
              autoFocus
            />
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel id='role-label'>Role</InputLabel>
              <Select
                labelId='role-label'
                id='role'
                value={role}
                label='Role'
                onChange={handleRoleChange}
              >
                <MenuItem value='department'>Department</MenuItem>
                <MenuItem value='accountant'>Accountant</MenuItem>
              </Select>
            </FormControl>
            {role === 'department' && (
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id='department-label'>Department</InputLabel>
                <Select
                  labelId='department-label'
                  id='department'
                  value={department}
                  label='Department'
                  onChange={handleDepartmentChange}
                >
                  <MenuItem value='computer'>Computer</MenuItem>
                  <MenuItem value='mechanical'>Mechanical</MenuItem>
                  <MenuItem value='electrical'>Electrical</MenuItem>
                  <MenuItem value='IT'>IT</MenuItem>
                </Select>
              </FormControl>
            )}
            <TextField
              InputLabelProps={{
                sx: {
                  '&.Mui-focused': {
                    color: palette.primary.light,
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
                mb: 2,
              }}
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
            />
            <TextField
              InputLabelProps={{
                sx: {
                  '&.Mui-focused': {
                    color: palette.primary.light,
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
                mb: 2,
              }}
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='new-password'
            />
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
              Sign Up
            </Button>
            <Grid container justifyContent='flex-end' mt={2}>
              <Grid item>
                <Link
                  href='/login'
                  variant='body2'
                  color={palette.primary.light}
                >
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
