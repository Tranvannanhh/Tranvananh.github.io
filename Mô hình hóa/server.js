require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./db/connection');

const app = express();

app.use(cors());
app.use(express.json());

// ✅ Kiểm tra server hoạt động
app.get('/', (req, res) => {
  res.send('Home Cleaning Backend is running...');
});

// ✅ API mẫu: Lấy danh sách nhân viên dọn dẹp
app.get('/cleaners', (req, res) => {
  db.query('SELECT * FROM cleaners', (err, results) => {
    if (err) {
      res.status(500).send('Lỗi truy vấn database');
    } else {
      res.json(results);
    }
  });
});

app.listen(process.env.PORT, () => {
  console.log(`🚀 Server đang chạy tại cổng ${process.env.PORT}`);
});
