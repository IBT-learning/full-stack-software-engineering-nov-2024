import expess from 'express';

const app = expess();
const PORT = 3001;

app.use(expess.static('public'));

app.listen(PORT, () => {
  console.log(`Listening on 127.0.0.1:${PORT}`);
});