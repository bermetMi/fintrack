async function loadTransactions(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Server antwortet mit Status ${response.status}`);
    }
    console.log(response.status);

    const transaction = await response.json();
    console.log(transaction);
  } catch (error) {
    console.error("Fehler", error.message);
  }
}

loadTransactions("http://localhost:3000/api/transactions");
