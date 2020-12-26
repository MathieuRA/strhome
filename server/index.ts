'use strict'

import express from 'express'

const app = express()

const PORT = process.env.PORT || 1234

app.listen(PORT, () => {
  console.log('Server started on: ' + PORT)
})