const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const { application } = require('express')
const database = require('./database')

const memos = []
app.use(bodyParser.json())

app.get('/api', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/memos', async (req, res) => {
    const result = await database.run('SELECT * FROM memo');
    res.send(result)
})

app.post('/api/memos', async (req, res) => {
    await database.run(`INSERT INTO memo (MEMO_CONT, CREAT_DT, CREAT_NM) VALUES ('?', sysdate(), 'lsy')`, [req.body.contents]);
    const result = await database.run('SELECT * FROM memo');
    res.send(result)
})

app.put('/api/memos/:idx', async (req, res) => {
  await database.run(`UPDATE memo SET
                           MEMO_CONT = ?
                         , UPDATE_DT = sysdate()
                         , UPDATE_NM = 'lsy'
                    WHERE ID = ?
  `,[req.body.contents, req.params.idx]);
  const result = await database.run('SELECT * FROM memo');
  //memos[req.params.idx] = req.body.contents
  //console.log(memos)
  res.send(result)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})