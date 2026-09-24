const validateAmount = (amount) => {
     if (amount < 0) {
        throw new Error("Amount must not be negative");
     }

     return amount;
};

try {
     console.log ("Start");
     validateAmount(-500);
     console.log("Dieses Ziel kommt nie")

} catch (error) {
        console.log(error.name);
        console.log( error.message);

} finally{
    console.log("Das kommt immer");
}

console.log("Programm läuft weiter");
