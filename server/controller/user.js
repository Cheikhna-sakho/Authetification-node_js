const UserModel = require(`${_basedir}/model/user`);
exports.findAll = (res, req) => {
    try {
        return res.status(200).json({status: 201,...UserModel});
    } catch (error) {
        return res.status(400).json({ status: 401, error })
    }
}
exports.find = (res, req) => {
    const id = req.params.id
    try {
        const user = UserModel.filter(user => user.id == id);
        return res.status(200).json({status: 201, ...user });
    } catch (error) {
        res.status(400).json({status:401, error })
    }
}