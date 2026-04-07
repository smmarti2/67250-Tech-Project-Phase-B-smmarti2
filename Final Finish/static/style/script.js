function greeting(hour) {
    let greetingElement = document.getElementById("greeting");

    // prevents errors on pages that do not have the greeting h2
    if (!greetingElement) return;

    if (hour < 5 || hour >= 20) {
        greetingElement.innerHTML = "Good night! Welcome to the MonoMuse Museum";
    } else if (hour < 12) {
        greetingElement.innerHTML = "Good morning! Welcome to the MonoMuse Museum";
    } else if (hour < 18) {
        greetingElement.innerHTML = "Good afternoon! Welcome to the MonoMuse Museum";
    } else {
        greetingElement.innerHTML = "Good evening! Welcome to the MonoMuse Museum";
    }
}

function addYear() {
    let yearElement = document.getElementById("copyYear");

    if (yearElement) {
        yearElement.innerHTML = "&copy; " + new Date().getFullYear() + " MonoMuse";
    }

    let now = new Date();
    let hour = now.getHours();
    greeting(hour);
}
let now = new Date();
let hour = now.getHours();

function greeting(x) {
    let greetingElement = document.getElementById("greeting");

    if (!greetingElement) return;

    if (x < 5 || x >= 20) {
        greetingElement.innerHTML = "Good night, welcome to the MonoMuse Museum";
    } else if (x < 12) {
        greetingElement.innerHTML = "Good morning, welcome to the MonoMuse Museum";
    } else if (x < 18) {
        greetingElement.innerHTML = "Good afternoon, welcome to the MonoMuse Museum";
    } else {
        greetingElement.innerHTML = "Good evening, welcome to the MonoMuse Museum";
    }
}

greeting(hour);

$(document).ready(function() {

    $("#longIntro").hide();
    $("#readLess").hide();

    $("#readMore").click(function() {
        $("#shortIntro").show();
        $("#longIntro").show();
        $("#readMore").hide();
        $("#readLess").show();
    });

    $("#readLess").click(function() {
        $("#longIntro").hide();
        $("#readLess").hide();
        $("#readMore").show();
        $("#shortIntro").show();
    });

});

function showPurchaseForm(date) {
    document.getElementById("purchase-form").style.display = "block";
    document.getElementById("selected-date").value = date;
}

function submitPurchase(event) {
    event.preventDefault();
    alert("Redirecting to payment system.")
}
function addYear() {
    const yearText = document.getElementById("copyYear");
    if (yearText) {
        yearText.innerHTML = "&copy; 2026 Monomuse";
    }
}

function showPurchaseForm(date) {
    const form = document.getElementById("purchase-form");
    const selectedDateInput = document.getElementById("selected-date");

    if (form) {
        form.style.display = "block";
    }

    if (selectedDateInput) {
        selectedDateInput.value = date;
    }
}

function submitPurchase(event) {
    event.preventDefault();

    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const ticketType = document.getElementById("ticket-type").value;
    const quantity = document.getElementById("quantity").value;
    const selectedDate = document.getElementById("selected-date").value;

    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("email", email);
    localStorage.setItem("ticketType", ticketType);
    localStorage.setItem("quantity", quantity);
    localStorage.setItem("selectedDate", selectedDate);

    alert("Redirecting to payment system.");
    window.location.href = "checkout.html";
}

function loadCheckoutInfo() {
    const firstName = localStorage.getItem("firstName");
    const lastName = localStorage.getItem("lastName");
    const email = localStorage.getItem("email");
    const ticketType = localStorage.getItem("ticketType");
    const quantity = parseInt(localStorage.getItem("quantity"));
    const selectedDate = localStorage.getItem("selectedDate");

    let price = 0;

    if (ticketType === "general") {
        price = 15;
    } else if (ticketType === "student") {
        price = 10;
    } else if (ticketType === "senior") {
        price = 12;
    }

    const total = price * quantity;

    const firstNameBox = document.getElementById("checkout-first-name");
    const lastNameBox = document.getElementById("checkout-last-name");
    const emailBox = document.getElementById("checkout-email");
    const ticketTypeBox = document.getElementById("checkout-ticket-type");
    const quantityBox = document.getElementById("checkout-quantity");
    const dateBox = document.getElementById("checkout-date");
    const totalBox = document.getElementById("checkout-total");

    if (firstNameBox) firstNameBox.value = firstName;
    if (lastNameBox) lastNameBox.value = lastName;
    if (emailBox) emailBox.value = email;
    if (ticketTypeBox) ticketTypeBox.value = ticketType;
    if (quantityBox) quantityBox.value = quantity;
    if (dateBox) dateBox.value = selectedDate;
    if (totalBox) totalBox.value = "$" + total;
}
function completePurchase() {
    alert("Purchase completed successfully!");
    localStorage.clear();
    window.location.href = "../index.html";
}
function toggleNav() {
    const nav = document.getElementById("myNav");

    if (nav.className === "nav_bar") {
        nav.className += " responsive";
    } else {
        nav.className = "nav_bar";
    }
}
function loadMap() {
    var map = L.map('map').setView([40.4406, -79.9959], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    L.marker([40.4406, -79.9959]).addTo(map)
        .bindPopup('Monomuse Museum')
        .openPopup();
}