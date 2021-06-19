const express = require('express')
const router = express.Router()

const app = express();

const PORT = process.env.PORT || 4000;


router.get("/", (req: any, res) => {

  
  res.send(`Bienvenido al server!`)
  
});
router.get("/:number", (req: any, res) => {
  const number: string = req.params.number
  console.log(typeof number)
  res.send(number)
  
});

app.use('/api', router)

const server = app.listen(PORT, () => console.log(`⚡Server is running here 👉 https://localhost:${PORT}`));

server.on('error', (error: unknown) => {
  console.log(`Error en servidor: ${error}`)
})
