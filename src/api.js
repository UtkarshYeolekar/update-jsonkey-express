let R = require('Ramda'),
    sampleJson = require('./sample');


module.exports = {

    updateJson: (req, res, next) => {
        if (req.query.path && req.query.path != "/" && req.body.data != undefined) {
            try {

                keyToUpdate = trimSlashes(req.query.path),
                    // breaking path by '/'.
                    paths = keyToUpdate.split("/"),
                    // finding secret key and node to update.
                    rootKey = paths[0],
                    childKeypath = getChildNodes(paths);
                let body = req.body.data;

                let json = getRootKeyValFromJson(sampleJson, rootKey);
                let prop = checkPropIfExist(childKeypath, json);
                if (prop == undefined)
                    res.send('Child Key Prop Doesnot Exist');
                else {
                    let updatedObj = sampleJson;
                    val = updateProp(childKeypath, json, body);
                    updatedObj[rootKey] = val;
                    res.send(updatedObj);
                }
            }
            catch (err) {
                res.send("Some error Occured");
            }
        }
        else
            res.send("Provide Valid Key/Path");
    }
}

let trimSlashes = (str) => str.replace(/^\/|\/$/g, ''),

    getChildNodes = (arr) => {
        let cparr = arr.slice();
        cparr.shift();
        return cparr;
    },

    getRootKeyValFromJson = (json, key) => {
        if (json && key != "/") {
            return json[key]
        }
        else if (key == "/")
            return json;
        else
            return;
    }

checkPropIfExist = (path, obj) => {
    return R.path(path, obj);
},

    updateProp = (path, obj, value) => {
        let Rpath = R.lensPath(path);
        return R.set(Rpath, value, obj);
}

