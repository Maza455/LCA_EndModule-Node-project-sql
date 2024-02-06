const {SubCategory} = require('../models')

module.exports = {
    async getSubCategoryByName(req, res) {
        try {
            let subCategory = await SubCategory.findOne({
                where: {
                    name: req.params.name
                }
            })
            res.send(subCategory)
        } catch (err) {
            res.status(500).send({
                error: 'Sorry, an error occured when trying to fetch a sub category.'
            })
        }
    },
    async getSubCategoryList(req, res) {
        try {
            let subCategories = await SubCategory.findAll()
            res.send(subCategories)
        } catch (err) {
            res.status(500).send({
                error: 'Sorry, an error occured when trying to fetch sub categories.'
            })
        }
    },
    async createSubCategory(req, res) {
        try {
            let subCategory = await SubCategory.create(req.body)
            res.send(subCategory)
        } catch (err) {
            res.status(500).send({
                error: 'Sorry, an error occured when trying to create a sub category.'
            })
        }
    },
    async updateSubCategory(req, res) {
        try {
            await SubCategory.update(req.body, {
                where: {
                    id: req.body.id
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Sorry, an error occured when trying to update a sub category.'
            })
        }
    },
    async deleteSubCategory(req, res) {
        try {
            let subCategory = await SubCategory.findById(req.params.subCategoryId)
            if (!subCategory) {
                return res.status(403).send({
                    error: 'Sorry, no sub-Category to throw in the bin.'
                })
            }
            await subCategory.destroy()
            res.send(subCategory)
        } catch (err) {
            res.status(500).send({
             ///////////////////////////////////////////////   error: 'Sorry, an error occured when trying to delete a sub-Category.'
            })
        }
    },
}