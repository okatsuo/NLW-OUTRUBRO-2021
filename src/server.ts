import { serverHttp } from './app'

const PORT = process.env.PORT || 5000

serverHttp.listen(PORT, () => {
  console.log(`server running at http://localhost:${5000}`)
})