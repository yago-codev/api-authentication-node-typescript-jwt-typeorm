import express from 'express'

import routes from './routes'

const app = express()

// configurando o express para trabalhar com JSON
app.use(express.json())

// arquivo de roteamento
app.use(routes)

app.listen(3000, () => console.log('Server started at http://localhost:3000'))