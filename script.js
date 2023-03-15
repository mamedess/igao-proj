function goToCheckout() {
    let url = 'https://pay.hotmart.com/M65840637K?off=az0nc4je&checkoutMode=10&offDiscount=84TCNC&src=principal_afiliados&ref=I80445303O&bid=1678762293303';
    window.open(url, "Checkout");
}

function dateOfToday() {
    const data = document.getElementById("data");
    let semana = new Array("Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado")
    let meses = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");
   
    let userOffset = new Date().getTimezoneOffset() * 60000;
    let userDate = new Date(Date.now() - userOffset);

    data.innerText = `Oferta disponível até: ${semana[userDate.getDay()]}, ${userDate.getDate()} de ${meses[userDate.getMonth()]} de ${userDate.getFullYear()}`
}

function initialize() {
    dateOfToday();

    window.addEventListener('contextmenu', (ev) => {
        ev.preventDefault();
    });
}

window.addEventListener('DOMContentLoaded', () => {
    initialize();
});

