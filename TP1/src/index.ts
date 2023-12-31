import * as http from 'http';
import * as url from 'url';

const PORT = process.env.PING_LISTEN_PORT ?? 3000;

const server = http.createServer((req, res) => {

  const parsedUrl = url.parse(req.url ?? '', true);


  if (req.method === 'GET' && parsedUrl.pathname === '/ping') {
    const response = {
      headers: req.headers,
    };
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(response));
  } else {
   
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('');
  }
});

server.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});