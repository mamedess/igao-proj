function goToCheckout() {
    let url = 'https://pay.hotmart.com/M65840637K?off=az0nc4je&checkoutMode=10&offDiscount=84TCNC&src=principal_afiliados&ref=I80445303O&bid=1678762293303';
    window.open(url, "Checkout");
}

function dateOfToday() {
    const data = document.getElementById("data");

    if (data) {
        let hoje = new Date();
        let semana = new Array("Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado")
        let meses = new Array("Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro");
        
        data.innerText = `${semana[hoje.getDay()]}, ${hoje.getDate()} de ${meses[hoje.getMonth()]} de ${hoje.getFullYear()}`
    }
}

function initialize() {
    dateOfToday();
}

window.onload = () => initialize();