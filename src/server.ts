import { port, serverHttp } from "./app"

serverHttp.listen(port, () => {
    console.log(`Server is running on PORT ${port}`)
})