import { Box, Button, Typography, useTheme } from '@mui/material'
import TransactionForm from './Accountant/TransactionForm'
import { useState } from 'react'
import ViewTransactions from './Accountant/ViewTransactions'
import ViewFeeDetails from './Accountant/ViewFeeDetails'
import MsgTable from './Department/MsgTable'

const Accountant = () => {
  const [expenseForm, setExpenseForm] = useState(false)
  const [viewTransactions, setViewTransactions] = useState(false)
  const [viewStudentFee, setViewStudentFee] = useState(false)
  const [viewAdminMsgs, setViewAdminMsgs] = useState(false)
  const { palette } = useTheme()

  const expenseFormHandler = () => {
    setExpenseForm(true)
    setViewTransactions(false)
    setViewStudentFee(false)
    setViewAdminMsgs(false)
  }

  const showTransactionHandler = () => {
    setExpenseForm(false)
    setViewTransactions(true)
    setViewStudentFee(false)
    setViewAdminMsgs(false)
  }

  const showFeesHandler = () => {
    setExpenseForm(false)
    setViewTransactions(false)
    setViewStudentFee(true)
    setViewAdminMsgs(false)
  }

  const showAdminMsgs = () => {
    setExpenseForm(false)
    setViewTransactions(false)
    setViewStudentFee(false)
    setViewAdminMsgs(true)
  }

  return (
    <Box sx={{ mt: 4, textAlign: 'center' }}>
      <Typography variant='h1' sx={{ color: palette.primary.light }}>
        Welcome to Accounts
      </Typography>
      <Box
        display='flex'
        justifyContent='space-around'
        width={'80%'}
        my={2}
        mx='auto'
      >
        <Button
          variant='contained'
          sx={{
            mt: 2,
            backgroundColor: palette.primary.main,
            color: 'black',
          }}
          onClick={expenseFormHandler}
        >
          Add Transactions
        </Button>
        <Button
          variant='contained'
          sx={{
            mt: 2,
            backgroundColor: palette.primary.main,
            color: 'black',
          }}
          onClick={showTransactionHandler}
        >
          View Transactions
        </Button>
        <Button
          variant='contained'
          sx={{
            mt: 2,
            backgroundColor: palette.primary.main,
            color: 'black',
          }}
          onClick={showFeesHandler}
        >
          View Students Fee
        </Button>
        <Button
          variant='contained'
          sx={{
            mt: 2,
            backgroundColor: palette.primary.main,
            color: 'black',
          }}
          onClick={showAdminMsgs}
        >
          View Admin Messages
        </Button>
      </Box>
      {expenseForm && <TransactionForm />}
      {viewTransactions && <ViewTransactions />}
      {viewStudentFee && <ViewFeeDetails />}
      {viewAdminMsgs && <MsgTable />}
    </Box>
  )
}

export default Accountant
