const express= require('express');
const app = express();
const port = 8081;


app.get('/', (request, response) => {
    response.status(200).json('hello from root');
})

app.listen(port, () => console.log('express server listening on port ${port}.'))
