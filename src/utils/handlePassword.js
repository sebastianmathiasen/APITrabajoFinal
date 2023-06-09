// Utilizo bcrypt porque es muy bueno para encriptar
// Luego encripto las contrasinias, son dos metodos: 1. Hash genera la contrasenia encriptada y el 2. Compare que toma la contrasenia plana y la compara con la contrasenia en la base de datos

const bcrypt = require('bcrypt');
const saltrounds = 10;

const hashPassword = async (password) => {
    return await bcrypt.hash(password, saltrounds);
};

const checkPassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
};

module.exports = { hashPassword, checkPassword };