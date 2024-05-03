import { useState } from 'react'
import { useTheme, Typography, Box, Button } from '@mui/material'
import StudentForm from './Department/StudentForm'
import MsgAdmin from './Department/MsgAdmin'
import { useSelector } from 'react-redux'
import MsgTable from './Department/MsgTable'

const DeptHeadPage = () => {
  const [showStudentForm, setShowStudentForm] = useState(false)
  const [showMsgAdminForm, setShowMsgAdminForm] = useState(false)
  const [showAdminMsgs, setShowAdminMsgs] = useState(false)
  const { palette } = useTheme()

  const userInfo = useSelector((state) => state.auth.userInfo)

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
        Welcome to the {userInfo.department} department
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
        Add student fee
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
        Ask for repairs to admin
      </Button>
      <Button
        onClick={handleShowMsgs}
        size='large'
        variant='contained'
        sx={{
          m: 2,
          backgroundColor: palette.primary.main,
        }}
        disabled={showMsgAdminForm}
      >
        Show Admin messages
      </Button>
      {showStudentForm && <StudentForm department={userInfo.department} />}
      {showMsgAdminForm && <MsgAdmin department={userInfo.department} />}
      {showAdminMsgs && <MsgTable />}
    </Box>
  )
}

export default DeptHeadPage
