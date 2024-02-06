const {User} = require('../models')

module.exports = {
    async checkUserName(req, res) {
        try {
            let user = await User.findOne({
                where: {
                    username: req.params.userName
                },
                attributes: ["id"]
            })
            if (!user) {
                res.send({
                    userNameAvailable: true
                })
            }
            else {
                res.send({
                    userNameAvailable: false
                })
            }
        } catch (err) {
            res.status(500).send({
                error: 'Sorry, an error occured valid username checking.'
            })
        }
    },
    async deleteAccount(req, res) {
        try {
            if (req.params.userId == req.user.id || req.user.priority == 1) {
                let user = await User.findById(req.params.userId)
                if (!user) {
                    return res.status(403).send ({
                        error: 'Sorry, no user to delete, try again.'
                    })
                }
                await user.destroy();
                res.send({
                    id: user.id
                })
            } else {
                return res.status(403).send({
                    error: 'Sorry, you do not have that privilege to do that.'
                })
            }
        } catch (err) {
            res.status(500).send({
                error: 'Sorry, an error occured when trying to delete an User Account, plz try again later.'
            })
        }
    },
    async getUserById(req, res) {
        try {
            let user = await User.findById(req.params.userId, {
                attributes: [
                    "id",
                    "username",
                    "firstName",
                    "lastName",
                    "profileImage",
                    "email",
                    "phoneNo",
                    "userType",
                    "variant",
                    "priority",
                    "CompanyId"                  
                ]
            })
            if (!user) {
                return res.status(403).send({
                    error: 'Sorry, User not found.'
                })
            }
            res.send(user) 
        } catch (err) {
            res.status(500).send({
                error: 'Sorry, an error occured when trying to get an User, try again.'
            })
        }
    },
    async getUserList(req, res) {
        try {
            let userId = req.user.id
            if (!userId) {
                return res.status(403).send({
                    error: 'Sorry, Request is not authenticated.'
                })
            }
            let userList = await User.findAll({
                attributes: [
                    "id",
                    "email",
                    "firstName",
                    "lastName",
                    "phoneNo",
                    "profileImage",
                    "userType",
                    "variant",
                    "priority",
                    "CompanyId"
                ]
            })
            res.send(userList);
        } catch (err) {
            res.status(500).send({
                error: 'Sorry, an error occured when trying to get user list.'
            })
        }
    },
    async updateUser(req, res) {
        try {
            let user = await User.update(req.body, {
                where: {
                    id: req.body.id
                }
            })
            res.send(user);
        } catch (err) {
            res.status(500).send({
                error: 'Sorry, an error occured when trying to update user information.'
            })
        }
    },
    async getUserByEmail(req, res) {
        try {
            let user = await User.findOne({
                where: {
                    email: req.params.email
                },
                attributes: ["id"]
            })
            if (!user) {
                return res.status(403).send({
                  error: 'Sorry, email not registered'  
                })
            }
            res.send(user)
        } catch (err) {
            res.status(500).send({
                error: 'Sorry, an error occured when trying to get an User.'
            })
        }
    }
}