import 'reflect-metadata'
import express from 'express'

import './database/connect'
import routes from './routes'

const app = express()

// configurando o express para trabalhar com JSON
app.use(express.json())

// arquivo de roteamento
app.use(routes)

app.listen(3000, () => console.log('Server started at http://localhost:3000'))