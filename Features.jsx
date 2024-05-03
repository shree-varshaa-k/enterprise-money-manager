import styled from '@emotion/styled'
import { Box, Grid, Typography, useTheme } from '@mui/material'

const FeatureBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.light,
  borderRadius: '1rem',
  boxShadow: '0.15rem 0.2rem 0.15rem 0.1rem rgba(0, 0, 0, 0.8)',
  display: 'flex',
  flexDirection: 'column',
  padding: '1rem',
  height: '100%',
}))

const featureData = [
  {
    title: 'Budget Allocation',
    description:
      'Efficiently allocate budgets across various departments, programs, and initiatives within your college. Monitor spending in real-time to ensure financial goals are met.',
  },
  {
    title: 'Expense Tracking',
    description:
      'Track expenses effortlessly with our intuitive interface. Categorize expenses, generate reports, and gain insights into spending patterns to optimize resource allocation.',
  },
  {
    title: 'Vendor Management',
    description:
      'Simplify vendor management processes by centralizing vendor information, contracts, and payment schedules. Ensure transparency and accountability in vendor transactions.',
  },
  {
    title: 'Financial Reporting',
    description:
      'Generate detailed financial reports tailored to meet regulatory requirements and internal auditing standards. Stay compliant and make informed decisions based on accurate financial data.',
  },
  {
    title: 'Integration Capabilities',
    description:
      'Seamlessly integrate EduFin with existing systems such as payroll, HR, and accounting software for streamlined data flow and enhanced efficiency.',
  },
  {
    title: 'Security & Compliance',
    description:
      'Rest assured knowing that your financial data is protected with robust security measures. EduFin complies with industry standards to safeguard sensitive information.',
  },
]

const Features = () => {
  const { palette } = useTheme()

  return (
    <>
      <Grid
        container
        width='80%'
        marginInline='auto'
        spacing={3}
        sx={{ mt: 4 }}
      >
        {featureData.map((features) => (
          <Grid key={features.title} item xs={12} md={4}>
            <FeatureBox>
              <Typography variant='h3' color={palette.primary.main}>
                {features.title}
              </Typography>
              <Typography
                variant='body1'
                color={palette.grey[300]}
                sx={{ mt: 1 }}
              >
                {features.description}
              </Typography>
            </FeatureBox>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default Features
