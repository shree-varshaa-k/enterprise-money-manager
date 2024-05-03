import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import { Box, useTheme } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useLoginMutation } from '../slices/userApiSlice'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../slices/authSlice'
import { useNavigate } from 'react-router-dom'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})
export default function SignIn() {
  const { palette } = useTheme()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [login, { isLoading }] = useLoginMutation()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const user = {
      email: data.get('email'),
      password: data.get('password'),
    }
    const res = await login(user).unwrap()
    dispatch(setCredentials({ ...res }))
    navigate('/')
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
            Sign in
          </Typography>
          <Box
            component='form'
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              autoFocus
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
              }}
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
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
              InputLabelProps={{
                sx: {
                  '&.Mui-focused': {
                    color: palette.primary.light,
                  },
                },
              }}
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{
                background: palette.primary.light,
                '&:hover': { background: palette.primary[300] },
                mt: 3,
                mb: 2,
              }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href='#' variant='body2' color={palette.primary.light}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link
                  href='/signup'
                  variant='body2'
                  color={palette.primary.light}
                >
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
