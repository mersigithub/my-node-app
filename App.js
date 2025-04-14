const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello CI/CD!'));
app.listen(3000, () => console.log('Server running on port 3000'));

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something broke!' });
  });
