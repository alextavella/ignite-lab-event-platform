import { ApolloProvider } from '@apollo/client'
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import { BrowserRouter } from 'react-router-dom'
import { client } from './lib/apollo'
import { Router } from './Router'

dayjs.locale('pt-br')

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
