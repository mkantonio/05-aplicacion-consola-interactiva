require('colors');

const {mostrarMenu, pausa} = require('./helpers/mensajes');
const { inquirerMenu } = require('./helpers/inquirer');

console.clear()

const main = async () => {
    console.log('Hola mundillo');

    let opt = '';
    do {
        opt = await inquirerMenu();
        console.log({opt});

    } while (opt !== '0');

    //pausa();


}

main();
