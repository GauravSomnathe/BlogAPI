require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 7878;

app.use(express.json());

const postRoutes = require('./routes/posts');
const commentRoutes = require('./routes/comments');

app.get('/', (req, res) => {
  res.send('Welcome to Simple Blog API!');
});

app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
