/*
  Pragmatic JavaScript
  Chapter 2
  Programming Assignment

  Author: Ben Hilarides
  Date: 6.28.25
  Filename: script.js
*/

// Create an in-memory object array for each table in the restaurant
let tables = [
  { tableNumber: 1, capacity: 2, isReserved: false },
  { tableNumber: 2, capacity: 4, isReserved: false },
  { tableNumber: 3, capacity: 6, isReserved: false },
  { tableNumber: 4, capacity: 8, isReserved: false },
  { tableNumber: 5, capacity: 10, isReserved: false },
  { tableNumber: 6, capacity: 12, isReserved: false },
];

console.log("Initial table state:", tables);

// Create a function reserveTable
function reserveTable(tableNumber, callback, time) {
  const table = tables.find(
    t => t.tableNumber === Number(tableNumber)
  );

  console.log("Requested table number:", tableNumber);
  console.log("Matched table object:", table);

  if (!table) {
    callback(`Error: Table ${tableNumber} does not exist.`);
    return;
  }

  if (table.isReserved) {
    callback(`Error: Table ${tableNumber} is already reserved.`);
    return;
  }

  table.isReserved = true;
  console.log(`Reservation set. Waiting ${time}ms...`);

  setTimeout(() => {
    console.log(`Timeout complete. Confirming reservation.`);
    callback(`Table ${tableNumber} has been reserved for ${time} minutes.`);
  }, time * 60000); // Convert minutes to milliseconds
}

// When the form is submitted, call the reserveTable function
document
  .getElementById("reservationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const tableNumber = document.getElementById("tableNumber").value.trim();
    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("message");

    if (!name || !tableNumber) {
      message.textContent = "Please enter your name and select a table.";
      return;
    }

    reserveTable(tableNumber, function (result) {
      message.textContent = result;
    }, 2);
  });
