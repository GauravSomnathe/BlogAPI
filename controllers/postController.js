const db = require('../dbconfig/db');

exports.createPost = (req, res) => {
  const { title, content } = req.body;
  const query = 'INSERT INTO posts (title, content) VALUES (?, ?)';
  db.query(query, [title, content], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ success: true, id: result.insertId });
  });
};

exports.getAllPosts = (req, res) => {
  db.query('SELECT * FROM posts', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.getPostById = (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM posts WHERE id = ?', [id], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results[0]);
  });
};

exports.updatePost = (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  db.query('UPDATE posts SET title = ?, content = ? WHERE id = ?', [title, content, id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ success: true });
  });
};

exports.deletePost = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM posts WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ success: true });
  });
};
