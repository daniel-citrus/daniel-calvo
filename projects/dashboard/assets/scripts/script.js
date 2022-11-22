let year = document.querySelectorAll('.current-year');

for (let y of year) {
    y.textContent = new Date().getUTCFullYear();
}

function getDaysUntilNextMonth() {
    const date = new Date();

    let timeDiff = new Date(date.getFullYear(), date.getMonth() + 1, 1) - date.getTime();

    return Math.ceil(timeDiff / (1000 * 3600 * 24));

}

let rentDue = document.getElementById('rent-due');
rentDue.textContent = getDaysUntilNextMonth();