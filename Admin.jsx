import { useState } from 'react'
import { useTheme, Typography, Box, Button } from '@mui/material'
import StudentFeeDetail from './Admin/StudentFeeDetail'
import TransactionDetail from './Admin/TransactionDetail'
import DepartmentMessage from './Admin/DepartmentMessage'

const Admin = () => {
  const [showStudentForm, setShowStudentForm] = useState(false)
  const [showMsgAdminForm, setShowMsgAdminForm] = useState(false)
  const [showAdminMsgs, setShowAdminMsgs] = useState(false)
  const { palette } = useTheme()

  const handleShowStudentForm = () => {
    setShowStudentForm(true)
    setShowMsgAdminForm(false)
    setShowAdminMsgs(false)
  }

  const handleShowMsgAdminForm = () => {
    setShowStudentForm(false)
    setShowMsgAdminForm(true)
    setShowAdminMsgs(false)
  }

  const handleShowMsgs = async () => {
    setShowMsgAdminForm(false)
    setShowStudentForm(false)
    setShowAdminMsgs(true)
  }

  return (
    <Box sx={{ mt: 4, textAlign: 'center' }}>
      <Typography variant='h1' sx={{ color: palette.primary.light }}>
        Welcome Admin
      </Typography>
      <Button
        onClick={handleShowStudentForm}
        size='large'
        variant='contained'
        sx={{
          m: 2,
          backgroundColor: palette.primary.main,
        }}
        disabled={showStudentForm}
      >
        Student Fees Details
      </Button>
      <Button
        onClick={handleShowMsgAdminForm}
        size='large'
        variant='contained'
        sx={{
          m: 2,
          backgroundColor: palette.primary.main,
        }}
        disabled={showMsgAdminForm}
      >
        Transactions Details
      </Button>
      <Button
        onClick={handleShowMsgs}
        size='large'
        variant='contained'
        sx={{
          m: 2,
          backgroundColor: palette.primary.main,
        }}
        disabled={showAdminMsgs}
      >
        Show Department messages
      </Button>
      {showStudentForm && <StudentFeeDetail />}
      {showMsgAdminForm && <TransactionDetail />}
      {showAdminMsgs && <DepartmentMessage />}
    </Box>
  )
}

export default Admin
