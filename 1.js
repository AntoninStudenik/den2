// Vytvoření labelu a inputu pro výběr barvy pozadí
const label = document.createElement('label');
label.setAttribute('for', 'bgcolor');
label.textContent = 'Vyber barvu pozadí: ';

const colorInput = document.createElement('input');
colorInput.type = 'color';
colorInput.id = 'bgcolor';
colorInput.value = '#ffffff';

// Najdi seznam oblíbených stránek (ul za druhým h1)
const favSitesList = document.querySelector('h1:nth-of-type(2) + ul');

// Vlož label a input za tento seznam
if (favSitesList) {
    favSitesList.parentNode.insertBefore(label, favSitesList.nextSibling);
    favSitesList.parentNode.insertBefore(colorInput, label.nextSibling);
    favSitesList.parentNode.insertBefore(document.createElement('br'), colorInput.nextSibling);
    favSitesList.parentNode.insertBefore(document.createElement('br'), colorInput.nextSibling);
}

// Změna barvy pozadí podle výběru uživatele
colorInput.addEventListener('input', function() {
    document.body.style.backgroundColor = this.value;
});

console.log("Antonín Studeník");
console.log("Pizza");

const num1 = 8;
const num2 = 3;

console.log("Sčítání:", num1 + num2);
console.log("Odčítání:", num1 - num2);
console.log("Násobení:", num1 * num2);
console.log("Dělení:", num1 / num2);