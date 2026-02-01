function addExpense() {
    const expense = {
        title: document.getElementById("title").value,
        amount: document.getElementById("amount").value
    };

    fetch("http://localhost:3000/add-expense", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(expense)
    }).then(() => loadExpenses());
}

function loadExpenses() {
    fetch("http://localhost:3000/expenses")
        .then(res => res.json())
        .then(data => {
            const list = document.getElementById("list");
            list.innerHTML = "";
            data.forEach(e => {
                list.innerHTML += `<li>${e.title} - ₹${e.amount}</li>`;
            });
        });
}

loadExpenses();
