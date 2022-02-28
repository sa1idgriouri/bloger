/* eslint-disable prettier/prettier */
const { Categories } = require("../models")


exports.getAllCategorie = async (req, res) => {

    try {
        const categoire = await Categories.findAll()
        if (!categoire) {
            return res.status(404).send("Categories Not Found")
        }
        else {
            return res.status(200).send(categoire)
        }
    }

    catch (err) {
        return res.status(500).json({ errors: err.message })
    }


}


function string_to_slug(str) {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();

    // remove accents, swap ñ for n, etc
    var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to = "aaaaeeeeiiiioooouuuunc------";
    for (var i = 0, l = from.length; i < l; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes

    return str;
}

exports.addCategorie = async (req, res) => {

    const name = req.body.name
    const Slug = string_to_slug(name)

    try {

        const Categorie = await Categories.create({ name: name, slug: Slug });
        res.status(200).send(Categorie)

    }
    catch (err) {
        console.error(err.message)
    }

}


exports.deleteCategorie = async (req, res) => {
    let CategoriesId = req.params.slug;
    try {
        await Categories.destroy({
            where: {
                id: CategoriesId
            }
        })
        res.status(200).json({
            message: 'Categorie is deleted.'
        })

    }
    catch (err) {

        res.status(500).json({ errors: err.message })
    }
}


exports.updateCategorie = async (req, res) => {


    const Name = req.body.name;
    const Slug = string_to_slug(Name)
    const CategoriesId = req.categorie



    await Categories.update({ name: Name, slug: Slug }, {
        where: {
            id: CategoriesId
        }
    });

    res.status(200).send("modifier")

}


exports.findCategorieById = (req, res, next, id) => {

    try {


        Categories.findByPk(id).then(categoire => {
            if (!categoire) {
                return res.status(404).send("Categorie Not Found")
            }

            req.categorie = categoire.id;
            next()
        })

    }
    catch (err) {
        const { details } = err;
        //const message = details.map(i => i.message).join(",");
        res.status(500).json({ errors: err.message })
    }
}