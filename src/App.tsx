import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { OrderProvider } from './contexts/OrderContext'

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <OrderProvider>
          <Router />
        </OrderProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
