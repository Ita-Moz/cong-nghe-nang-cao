let products = require('../models/adminData')

//multer
var multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/image')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname)
    }
});
var upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        console.log(file);
        if (file.mimetype == "image/jpge" || file.mimetype == "image/png" || file.mimetype == "image/gif") {
            cb(null, true)
        } else {
            return cb(new Error('Dung luong anh qua lon'))
        }
    }
}).single("txtFile");

exports.show = (req, res) => {
    products.find((err, data) => {
        if (err) {
            res.json("Error hien thi")
        } else {
            res.render('list', { danhsach: data })
        }
    })
}
exports.add_show = (req, res) => {
    res.render('admin')
}

exports.add = (req, res) => {
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            console.log("Error when uploading.");
        } else if (err) {
            console.log("An unknown error " + err);
        } else {
            var product = products({
                name: req.body.txtName,
                image: req.file.filename,
                price: req.body.txtPrice,
                describe: req.body.txtDescribe,
            })
            product.save((err) => {
                if (err) {
                    res.json("save khong thanh cong");
                } else {
                    res.redirect("http://localhost:3000/admin/dashboard")
                }
            });
        }

    });
}
exports.deleted = (req, res) => {
   
}

