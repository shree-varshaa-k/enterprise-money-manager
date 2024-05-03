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
import { useMessagesQuery } from '../../slices/departmentSlice'

const MsgTable = () => {
  const { palette } = useTheme()
  const { data, isLoading, error } = useMessagesQuery()

  return (
    <div>
      <h2>Admin messages</h2>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant='h4'>Item</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h4'>Type</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h4'>Message</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h4'>Estimate</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h4'>Approved</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((message) => (
                <TableRow key={message._id}>
                  <TableCell>{message.item}</TableCell>
                  <TableCell>{message.type}</TableCell>
                  <TableCell>{message.message}</TableCell>
                  <TableCell>{message.estimate}</TableCell>
                  <TableCell>{message.approved ? 'Yes' : 'No'}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  )
}

export default MsgTable
