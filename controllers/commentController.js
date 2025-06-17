const db = require('../dbconfig/db');

exports.addComment = (req, res) => {
  const { postId } = req.params;
  const { author, content } = req.body;
  const query = 'INSERT INTO comments (post_id, author, content) VALUES (?, ?, ?)';
  db.query(query, [postId, author, content], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ success: true, commentId: result.insertId });
  });
};

exports.getCommentsByPost = (req, res) => {
  const { postId } = req.params;
  db.query('SELECT * FROM comments WHERE post_id = ?', [postId], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};
