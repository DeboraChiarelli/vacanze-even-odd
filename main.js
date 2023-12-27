function filterNumbersByParity(array, even) {
    // Utilizzo il metodo filter per selezionare i numeri in base alla parità
    return array.filter(number => (even && number % 2 === 0) || (!even && number % 2 !== 0));
}

function printResults(array, title) {
    // Creo un elemento paragrafo
    const resultParagraph = document.createElement('p');

    // Aggiungo il titolo al paragrafo
    resultParagraph.textContent = `${title}: [${array.join(', ')}]`;

    // Aggiungo l'elemento paragrafo al corpo del documento
    document.body.appendChild(resultParagraph);
}

const inputArray = [1, 3, 5, 2, 10, 6, 4, 9];

const evenResult = filterNumbersByParity(inputArray, true);
printResults(evenResult, 'Numeri Pari');

const oddResult = filterNumbersByParity(inputArray, false);
printResults(oddResult, 'Numeri Dispari');