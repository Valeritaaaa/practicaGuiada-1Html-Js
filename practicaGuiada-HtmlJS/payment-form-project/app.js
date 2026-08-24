const STORAGE_KEY = "payments";
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const cardTypeInput = document.getElementById("cardType");
const cardNumberInput = document.getElementById("cardNumber");
const expirationDateInput = document.getElementById("expirationDate");

function setupPaymentForm() { 
    const form = document.getElementById("paymentForm"); 

    if(!form){
        return;
    }

    form.addEventListener("submit", function (event) { 
        event.preventDefault();

        const payment = {
            name: nameInput.value,
            email: emailInput.value,
            password: passwordInput.value,
            cardType: cardTypeInput.value,
            cardNumber: cardNumberInput.value,
            expirationDate: expirationDateInput.value
        };

        savePayment(payment);
        alert("Pago registrado correctamente")
        form.reset()
        window.location.href ="index.html"
    }); 
}

setupPaymentForm();

function getPayments(){
    const storedPayments =  localStorage.getItem(STORAGE_KEY); 
    if (storedPayments === null) {
        return [];
    }
    return JSON.parse(storedPayments);
}

function savePayments(payments) {
    localStorage.setItem(STORAGE_KEY,JSON.stringify(payments)
    );
}

function savePayment(payment) {
    const payments = getPayments();
    payments.push(payment);
    savePayments(payments);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payments));

}

function deletePayment(index) {
    const payments = getPayments();

    payments.splice(index, 1);// esto lo que significa es que desde la posicion index elimina 1 elemento

    savePayments(payments);

    displayPayments();
}


function displayPayments() {
    const paymentList = document.getElementById("paymentList");

    paymentList.innerHTML = "";

    const payments = getPayments();

    payments.forEach(function (payment, index) {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${payment.name}</td>
            <td>${payment.email}</td>
            <td>${payment.cardType}</td>
        `;

        const actionCell = document.createElement("td");

        const button = document.createElement("button");
        button.textContent = "Eliminar";

        button.addEventListener("click", function () {
            deletePayment(index);
        });

        actionCell.appendChild(button);
        row.appendChild(actionCell);

        paymentList.appendChild(row);
    });
}
