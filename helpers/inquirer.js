const inquirer = require('inquirer');
require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: ['opt1', 'opt2', 'opt3']
    }
];

const inquirerMenu = async() => {
    console.clear();
    console.log('===================='.green);
    console.log(' Seleccione una opcion'.green);
    console.log('====================\n'.green);

    return await inquirer.prompt(preguntas);
}

module.exports = {
    inquirerMenu
}

