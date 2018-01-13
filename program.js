const net = require("net");
const strftime = require("strftime");

const formatDate = () => strftime('%F %R', new Date());
const server = net.createServer(socket =>   
        
   socket.end(`${formatDate()}\n`)
 );  
server.listen(process.argv[2]);  