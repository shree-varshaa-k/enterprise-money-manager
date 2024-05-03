import {
  useTheme,
  Typography,
  Box,
  TextField,
  Button,
  MenuItem,
} from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useState } from 'react'
import { useAddTransactionsMutation } from '../../slices/accountSlice'

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

const TransactionForm = () => {
  const { palette } = useTheme()
  const [transactionType, setTransactionType] = useState('debit')

  const [addTransaction] = useAddTransactionsMutation()

  const handleTypeChange = (event) => {
    setTransactionType(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const expense = {
      date: data.get('date'),
      description: data.get('description'),
      amount: data.get('amount'),
      type: transactionType,
    }
    console.log(expense)

    event.currentTarget.reset()

    const res = await addTransaction(expense).unwrap()
    console.log(res)
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <Typography variant='h6' sx={{ color: palette.primary.light, mt: 2 }}>
        Add transactions
      </Typography>
      <Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <TextField
          sx={{ mt: 2 }}
          id='date'
          name='date'
          // label='Date'
          type='date'
          fullWidth
          required
          InputLabelProps={{ sx: { color: palette.grey[300] } }}
          InputProps={{
            sx: { borderColor: palette.grey[300], color: 'white' },
          }}
          variant='outlined'
        />
        <TextField
          sx={{ mt: 2 }}
          id='description'
          name='description'
          label='Description'
          multiline
          rows={5}
          fullWidth
          required
          InputLabelProps={{ sx: { color: palette.grey[300] } }}
          InputProps={{
            sx: { borderColor: palette.grey[300], color: 'white' },
          }}
          variant='outlined'
        />
        <TextField
          sx={{ mt: 2 }}
          id='amount'
          name='amount'
          label='Amount'
          type='number'
          step='any'
          fullWidth
          required
          InputLabelProps={{ sx: { color: palette.grey[300] } }}
          InputProps={{
            sx: { borderColor: palette.grey[300], color: 'white' },
          }}
          variant='outlined'
        />
        <TextField
          sx={{ mt: 2 }}
          id='transactionType'
          select
          label='Transaction Type'
          value={transactionType}
          onChange={handleTypeChange}
          fullWidth
          InputLabelProps={{ sx: { color: palette.grey[300] } }}
          InputProps={{
            sx: { borderColor: palette.grey[300], color: 'white' },
          }}
          variant='outlined'
        >
          <MenuItem value='debit'>Debit</MenuItem>
          <MenuItem value='credit'>Credit</MenuItem>
        </TextField>
        <Button
          type='submit'
          variant='contained'
          sx={{
            mt: 2,
            backgroundColor: palette.primary.main,
            color: 'black',
          }}
        >
          Submit
        </Button>
      </Box>
    </ThemeProvider>
  )
}

export default TransactionForm
