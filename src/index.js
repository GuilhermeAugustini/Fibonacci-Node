'use strict'

const fibonacci = () => {
    let fi = [0];
    let n1 = 0;
    let n2 = 1;
    let soma = 0;
    for (let i = 0; fi[i] < 350 ; i++ ) {
        fi.push(n2);
        soma = n1 +n2;
        n1 = n2;
        n2 = soma;
    };
    return fi;
}

const isFibonnaci = num => fibonacci().includes(num)


module.exports = {
    fibonacci,
    isFibonnaci
}
