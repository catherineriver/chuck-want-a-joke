import { createTheme } from '@mui/material'
import { grey } from '@mui/material/colors'
export const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat'
  },
  palette: {
    text: {
      primary: grey[900]
    },
    background: {
      default: '#fafafa'
    }
  }
})
