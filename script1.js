function getAdmins(map){
    let admins =[];
    for([key,value] of map){
        if (value === 'Admin'){
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luis', 'Admin');
usuarios.set('Stephany', 'Admin');
usuarios.set('Jorge', 'User');
usuarios.set('Natália', 'Admin');

console.log(usuarios.get('Luis'))
console.log(getAdmins(usuarios));
//retorna somente os usuarios admin
// itera com for.. of