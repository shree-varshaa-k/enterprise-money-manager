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
import { useGetTransactionsQuery } from '../../slices/accountSlice'
import Loader from '../../components/Loader'

const TransactionDetail = () => {
  const { palette } = useTheme()
  const { data, isLoading, error } = useGetTransactionsQuery()
  console.log({ data, isLoading, error })

  return (
    <div>
      <h2>Transactions</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant='h4'>Date</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h4'>Description</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h4'>Type</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h4'>Amount</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((message) => (
                <TableRow key={message._id}>
                  <TableCell>{message.date.toString().split('T')[0]}</TableCell>
                  <TableCell>{message.description}</TableCell>
                  <TableCell>{message.type}</TableCell>
                  <TableCell>{message.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  )
}

export default TransactionDetail
