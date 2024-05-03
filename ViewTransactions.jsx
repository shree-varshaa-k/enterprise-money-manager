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
  Button,
  Select,
  MenuItem,
  TextField,
  Box,
} from '@mui/material'
import {
  useDeleteTransactionMutation,
  useEditTransactionMutation,
  useGetTransactionsQuery,
} from '../../slices/accountSlice'
import Loader from '../../components/Loader'
import { createTheme, ThemeProvider } from '@mui/material/styles'
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

const ViewTransactions = () => {
  const { palette } = useTheme()
  const { data, isLoading, error, refetch } = useGetTransactionsQuery()

  const [editTransaction] = useEditTransactionMutation()
  const [deleteTransaction] = useDeleteTransactionMutation()
  const [filter, setFilter] = useState('day')
  const [selectedDate, setSelectedDate] = useState('')

  const editHandler = (id) => {
    const newAmount = Number(prompt('Enter new amount'))
    const data = { id, amount: newAmount }
    const res = editTransaction(data).unwrap()
    refetch()
    console.log(res)
  }

  const deleteHandler = (id) => {
    const res = deleteTransaction(id).unwrap()
    refetch()
    console.log(res)
  }

  const filterData = (data, filter) => {
    const currentDate = new Date()
    switch (filter) {
      case 'day':
        return data.filter(
          (message) =>
            new Date(message.date).getDate() === currentDate.getDate()
        )
      case 'week':
        const startOfWeek = new Date(currentDate)
        startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay())
        const endOfWeek = new Date(currentDate)
        endOfWeek.setDate(endOfWeek.getDate() - endOfWeek.getDay() + 6)
        return data.filter((message) => {
          const messageDate = new Date(message.date)
          return messageDate >= startOfWeek && messageDate <= endOfWeek
        })
      case 'month':
        return data.filter(
          (message) =>
            new Date(message.date).getMonth() === currentDate.getMonth()
        )
      case 'year':
        return data.filter(
          (message) =>
            new Date(message.date).getFullYear() === currentDate.getFullYear()
        )
      case 'specificDate':
        return data.filter(
          (message) =>
            new Date(message.date).toDateString() ===
            new Date(selectedDate).toDateString()
        )
      default:
        return data
    }
  }

  const handleChangeFilter = (event) => {
    setFilter(event.target.value)
  }

  const handleChangeDate = (event) => {
    setSelectedDate(event.target.value)
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <Typography variant='h6' sx={{ color: palette.primary.light, mt: 2 }}>
        Transactions
      </Typography>
      <Box display={'flex'} gap={5} alignItems='center' justifyContent='center'>
        <Typography variant='p' sx={{ color: palette.primary.light, mt: 2 }}>
          {' '}
          Filter by
        </Typography>
        <Select value={filter} onChange={handleChangeFilter} sx={{ mt: 2 }}>
          <MenuItem value='day'>Day</MenuItem>
          <MenuItem value='week'>Week</MenuItem>
          <MenuItem value='month'>Month</MenuItem>
          <MenuItem value='year'>Year</MenuItem>
          <MenuItem value='specificDate'>Specific Date</MenuItem>
        </Select>
        {filter === 'specificDate' && (
          <TextField
            id='specificDate'
            label='Select Date'
            type='date'
            value={selectedDate}
            onChange={handleChangeDate}
            sx={{ mt: 2 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        )}
      </Box>
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
                    Description
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color={palette.secondary.light} variant='p'>
                    Type
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color={palette.secondary.light} variant='p'>
                    Amount
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    color={palette.secondary.light}
                    variant='p'
                    className='px-10'
                  >
                    Actions
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filterData(data, filter).map((message) => (
                <TableRow key={message._id}>
                  <TableCell>{message.date.toString().split('T')[0]}</TableCell>
                  <TableCell>{message.description}</TableCell>
                  <TableCell>{message.type}</TableCell>
                  <TableCell>{message.amount}</TableCell>
                  <TableCell>
                    <Button onClick={() => editHandler(message._id)}>
                      Edit
                    </Button>
                    <Button
                      onClick={() => deleteHandler(message._id)}
                      color='error'
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </ThemeProvider>
  )
}

export default ViewTransactions
