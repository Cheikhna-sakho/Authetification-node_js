const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const UserModel = require(`${_basedir}/model/user`);
exports.register = (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const verifyEmail = UserModel.filter(user => user.email == email);
    if (verifyEmail.length > 0) {
        return res.status(400).json({status: 401, message: "l'utilisateur existe deja" });
    }
    bcrypt.hash(req.body.password, 10)
        .then(password => {
            const user = { firstname, lastname, email, password };
            for(userInfo in user){
                if (user[userInfo] === undefined || user[userInfo] === "") {
                    return res.status(400).json({status: 401,message: "il manque "+userInfo})
                }
            }
            console.log(user);
            try {
                UserModel.push(user);
                return res.status(200).json({status: 201, message: "Inscription reussi" })
            } catch (error) {
                return res.status(400).json({status: 401, error });
            }
        })
        .catch(error => res.status(500).json({status: 501, error,message: "bcrypt ne pass pas" }));

}
exports.login = (req, res) => {

    const email = req.body.email;
    const password = req.body.password;
    const verifyEmail = UserModel.filter(user => user.email == email);
    if (verifyEmail.length > 0) {
        console.log(verifyEmail);
        const user = verifyEmail[0];
        bcrypt.compare(password,user.password)
            .then(valid => {
                console.log(valid);
                if (!valid) {
                    res.status(400).json({status: 401, message: "Mot  de passe incorrect" });
                } else {
                    return res.status(200).json({
                        status: 201,
                        token: jwt.sign({ expiresIn: '24h' }, 'RANDOM_TOKEN_SECRET'),
                        message: "connection reussi",
                        user
                    })
                }
            })
            .catch(error => res.status(500).json({status: 501, error }))
    } else {
        return res.status(400).json({status:401, message: "Aucun utilisateur trouvé" });
    }
};