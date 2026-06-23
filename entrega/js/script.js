document.addEventListener('DOMContentLoaded', () => {
    const payButton = document.getElementById('payButton');

    if (payButton) {
        payButton.addEventListener('click', () => {
            // Redireciona para o Google
            window.location.href = 'https://pay.ment-docelavitta.online/lDW0ZaJE2jRGN7E';
        });
    }
});