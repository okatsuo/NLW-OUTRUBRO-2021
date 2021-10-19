import 'dotenv/config'
import express, { response } from 'express'
import { router } from './routers'

const app = express()
app.use(express.json())

app.use(router)

app.get('/github', (req, res) => {
  res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`)
})

app.get('/signin/callback', (req, res) => {
  const { code } = req.query
  res.json(code)
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`server running at http://localhost:${5000}`)
})