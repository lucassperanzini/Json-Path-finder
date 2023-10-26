const jsonServer = require("json-server")

const server = jsonServer.create()

const rotas = jsonServer.router('pathfinderJson.json')

const middlewares = jsonServer.defaults();

server.use(middlewares)

server.use(rotas)

server.listen(3000,()=>{
    console.log('servidor -> Funcionando 😍')
})