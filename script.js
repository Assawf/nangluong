function showInfo(espId) {
  var infoDiv = document.getElementById('info');
  // Simulate fetching data from ESP32
  var espData = fetchDataFromESP(espId);
  // Display data
  infoDiv.innerHTML = `
    <h2>${espId}</h2>
    <p>Dòng điện: ${espData.phaseCurrent} A</p>
    <p>Điện áp: ${espData.phaseVoltage} V</p>
    <p>Điện năng tiêu thụ: ${espData.powerConsumption} W</p>
    <p>Nhiệt độ: ${espData.temperature} &#8451;</p>
  `;
}

function fetchDataFromESP(espId) {
  // Simulated data for demonstration
  var espData = {
    phaseCurrent: Math.random() * 10,
    phaseVoltage: Math.random() * 220,
    powerConsumption: Math.random() * 1000,
    temperature: Math.random() * 50
  };
  return espData;
}
