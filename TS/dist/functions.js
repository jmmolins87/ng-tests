// function sumar( a: number, b: number ): number {
//     return a + b;
// }
const sumar = (a, b) => a + b;
// *Párametros opcionales
const nameCompleted = (name, lastName) => {
    if (lastName) {
        return `${name} ${lastName}`;
    }
    else {
        return name;
    }
};
// *Párametros Rest
function showColors(primaryColor, ...colors) {
    return primaryColor + ' ' + colors.join(' ');
}
console.log(showColors('Red', 'Blue', 'Green', 'Yellow'));
