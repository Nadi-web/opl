document.getElementById('ticketForm').addEventListener('submit', function(event) {
    event.preventDefault();     

    const routeNumber = document.getElementById('routeNumber').value;
    const carNumber = document.getElementById('carNumber').value;
    const way = document.getElementById('way').value;
    const avto = document.getElementById('avto').value;

    document.getElementById('routeOutput').textContent = routeNumber;
    document.getElementById('carNumberOutput').textContent = carNumber;
    document.getElementById('wayOutput').textContent = way;
    document.getElementById('avtoOutput').textContent = avto;

    const now = new Date();
    const purchaseDate = now.toLocaleDateString('ru-RU');
    const purchaseTime = now.toLocaleTimeString('ru-RU');

    document.getElementById('purchaseDate').textContent = purchaseDate;
    document.getElementById('purchaseTime').textContent = purchaseTime;

    document.getElementById('ticketContainer').style.display = 'flex';
    document.getElementById('ticketForm').style.display = 'none';
});
