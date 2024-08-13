document.addEventListener('DOMContentLoaded', () => {
    const voltageCtx = document.getElementById('voltageChart').getContext('2d');
    const currentCtx = document.getElementById('currentChart').getContext('2d');
    const powerCtx = document.getElementById('powerChart').getContext('2d');
    const powerFactorCtx = document.getElementById('powerFactorChart').getContext('2d');
    const frequencyCtx = document.getElementById('frequencyChart').getContext('2d');

    // Sample data for demonstration
    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const sampleData = [12, 19, 3, 5, 2, 3, 8, 12, 15, 10, 14, 7];

    // Create charts
    new Chart(voltageCtx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Voltage (V)',
                data: sampleData,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 1
            }]
        }
    });

    new Chart(currentCtx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Current (A)',
                data: sampleData,
                borderColor: 'rgba(153, 102, 255, 1)',
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderWidth: 1
            }]
        }
    });

    new Chart(powerCtx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Power (W)',
                data: sampleData,
                borderColor: 'rgba(255, 206, 86, 1)',
                backgroundColor: 'rgba(255, 206, 86, 0.2)',
                borderWidth: 1
            }]
        }
    });

    new Chart(powerFactorCtx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Power Factor',
                data: sampleData,
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderWidth: 1
            }]
        }
    });

    new Chart(frequencyCtx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Frequency (Hz)',
                data: sampleData,
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderWidth: 1
            }]
        }
    });
});
