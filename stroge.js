
document.getElementById("orderBtn").addEventListener("click", function () {

    let orderData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        address: document.getElementById("address").value,
        city: document.getElementById("city").value,
        postal: document.getElementById("postal").value,
        payment: document.querySelector('input[name="payment"]:checked')?.id || "COD"
    };

    // save data
    localStorage.setItem("orderData", JSON.stringify(orderData));

    // redirect to success page
    window.location.href = "success.html";

});

