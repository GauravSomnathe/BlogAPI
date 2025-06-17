const express = require('express');
const router = express.Router();
const {
  addComment,
  getCommentsByPost
} = require('../controllers/commentController');

router.post('/:postId', addComment);
router.get('/:postId', getCommentsByPost);

module.exports = router;
