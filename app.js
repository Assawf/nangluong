function fetchData() {
  fetch('/temperature')
    .then(response => response.json())
    .then(data => {
      document.getElementById('temperature').innerText = `Temperature: ${data.temperature} °C`;
    })
    .catch(error => console.error('Error fetching data:', error));
}

setInterval(fetchData, 5000); // Lấy dữ liệu mỗi 5 giây
fetchData(); // Lấy dữ liệu ban đầu
