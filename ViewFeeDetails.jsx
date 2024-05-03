import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  useTheme,
  Typography,
} from '@mui/material'
import { useGetStudentFeeQuery } from '../../slices/accountSlice'
import Loader from '../../components/Loader'
import { createTheme, ThemeProvider } from '@mui/material/styles'

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

const ViewFeeDetails = () => {
  const { palette } = useTheme()
  const { data, isLoading, error } = useGetStudentFeeQuery()

  return (
    <ThemeProvider theme={darkTheme}>
      <Typography variant='h6' sx={{ color: palette.primary.light, mt: 2 }}>
        Student Fee Details
      </Typography>
      {isLoading ? (
        <Loader />
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography color={palette.secondary.light} variant='p'>
                    Date
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color={palette.secondary.light} variant='p'>
                    Department
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color={palette.secondary.light} variant='p'>
                    Register Number
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color={palette.secondary.light} variant='p'>
                    Amount
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((message) => (
                <TableRow key={message._id}>
                  <TableCell>{message.date.toString().split('T')[0]}</TableCell>
                  <TableCell>{message.department}</TableCell>
                  <TableCell>{message.regNo}</TableCell>
                  <TableCell>{message.fees}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </ThemeProvider>
  )
}

export default ViewFeeDetails
