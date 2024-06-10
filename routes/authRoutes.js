const express = require('express');
const router = express.Router();
const cors = require('../controllers/authController.js')

router.use(
  cors({
    Credentials: true,
    origin: 'https;//localhost:5173'
  })
)

router.get('/', test)
router.post('/login', loginUser)

module.exports = router