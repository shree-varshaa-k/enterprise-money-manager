import { Typography, useTheme } from '@mui/material'

const GetStarted = () => {
  const { palette } = useTheme()

  return (
    <>
      <Typography variant='h2' color={palette.primary.main} sx={{ mt: 4 }}>
        Get Started
      </Typography>
      <Typography variant='h3' color={palette.primary.light} sx={{ mt: 2 }}>
        Overview
      </Typography>
      <Typography variant='body1' color={palette.grey[300]} sx={{ mt: 1 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        ultricies magna sed arcu tincidunt vehicula. Curabitur pharetra arcu nec
        erat aliquet, eget blandit risus hendrerit. Phasellus at dui quis nunc
        lobortis hendrerit non sed turpis.
      </Typography>
      <Typography variant='h3' color={palette.primary.light} sx={{ mt: 3 }}>
        Admin Module
      </Typography>
      <Typography variant='body1' color={palette.grey[300]} sx={{ mt: 1 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        ultricies magna sed arcu tincidunt vehicula. Curabitur pharetra arcu nec
        erat aliquet, eget blandit risus hendrerit. Phasellus at dui quis nunc
        lobortis hendrerit non sed turpis.
      </Typography>
      <Typography variant='h3' color={palette.primary.light} sx={{ mt: 3 }}>
        Department Head Module
      </Typography>
      <Typography variant='body1' color={palette.grey[300]} sx={{ mt: 1 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        ultricies magna sed arcu tincidunt vehicula. Curabitur pharetra arcu nec
        erat aliquet, eget blandit risus hendrerit. Phasellus at dui quis nunc
        lobortis hendrerit non sed turpis.
      </Typography>
      <Typography variant='h3' color={palette.primary.light} sx={{ mt: 3 }}>
        Accountant Module
      </Typography>
      <Typography variant='body1' color={palette.grey[300]} sx={{ mt: 1 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        ultricies magna sed arcu tincidunt vehicula. Curabitur pharetra arcu nec
        erat aliquet, eget blandit risus hendrerit. Phasellus at dui quis nunc
        lobortis hendrerit non sed turpis.
      </Typography>
    </>
  )
}

export default GetStarted
