const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Dữ liệu mẫu từ ESP32
const temperatureData = {
  temperature: 25.0 // Giả sử nhiệt độ được gửi từ ESP32 là 25.0 °C
};

// Route để truy cập dữ liệu nhiệt độ từ ESP32
app.get('/nangluong/data', (req, res) => {
  res.json(temperatureData);
});

// Serve các file tĩnh (HTML, CSS, JavaScript)
app.use(express.static('public'));

// Bắt đầu máy chủ
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
