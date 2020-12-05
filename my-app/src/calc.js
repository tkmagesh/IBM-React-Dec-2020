export function add(x,y){
    return x + y;
}

export function subtract(x,y){
    return x - y;
}

// default export
// there can be ONLY ONE default export
const calc = { name: "calculator", add, subtract };
export default calc;