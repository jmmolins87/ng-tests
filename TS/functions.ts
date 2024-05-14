

// function sumar( a: number, b: number ): number {
//     return a + b;
// }

const sumar: IFunction = ( a: number, b: number ): number => a + b;

// *Párametros opcionales
const nameCompleted = ( name: string, lastName?: string ): string => {
    if( lastName ) {
        return `${ name } ${ lastName }`;
    } else {
        return name;
    }
}

// *Párametros Rest
function showColors( primaryColor: string, ...colors: string[] ): string {
    return primaryColor + ' ' + colors.join(' ');
}
console.log( showColors('Red', 'Blue', 'Green', 'Yellow'));
