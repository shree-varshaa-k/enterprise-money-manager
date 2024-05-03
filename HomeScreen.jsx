import { Box, Button, Grid, Typography, useTheme } from '@mui/material'
import { Link } from 'react-router-dom'

function HomeScreen() {
  const { palette } = useTheme()
  return (
    <>
      <Grid container height='85%' alignItems='end' p='2rem 8rem'>
        <Grid item lg={6} md={8} sm={10} xs={12}>
          <Box
            display='flex'
            gap='1rem'
            flexDirection='column'
            justifyContent='end'
          >
            <Typography
              variant='h2'
              fontWeight='700'
              fontSize='2.5rem'
              color={palette.primary.light}
            >
              Welcome to Edu-Fin
            </Typography>
            <Typography
              variant='h1'
              fontWeight='800'
              fontSize='3rem'
              textTransform={'capitalize'}
              color={palette.grey[300]}
            >
              your comprehensive finance management solution
            </Typography>
            <Typography variant='h3' color={palette.grey[600]} fontWeight='400'>
              designed specifically for colleges and educational institutions.
              With EduFin, streamline your financial processes and gain better
              control over your institution&apos;s finances.
            </Typography>
            <Box display='flex' gap='1rem' marginTop='1rem'>
              <Button
                variant='contained'
                sx={{
                  background: palette.primary.main,
                  '&:hover': { background: palette.primary[300] },
                }}
              >
                <Link to='/get-started'>Get Started</Link>
              </Button>
              <Button
                variant='outlined'
                sx={{
                  color: palette.primary.light,
                  '&:hover': { color: palette.primary[300] },
                }}
              >
                <Link to='/features'>Learn More</Link>
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default HomeScreen
