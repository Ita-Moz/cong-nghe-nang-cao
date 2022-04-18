let fs = require('fs')
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
    limits: {
        fieldNameSize: 300,
        fileSize: 10 * 1024 * 1024, // 10 Mb
    },
    fileFilter: function (req, file, cb) {
        console.log(file);
        cb(null, true)
    }
}).single("txtFile");

exports.show = (req, res) => {
    products.find((err, data) => {
        if (err) {
            res.json("Error hien thi")
        } else {
            res.render('dashboard', { danhsach: data })
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
            products.create({
                name: req.body.txtName,
                image: req.file.filename,
                soluong: req.body.txtSoluong,
                price: req.body.txtPrice,
                describe: req.body.txtDescribe,
            })
                .then(() => {
                    res.redirect("http://localhost:3000/Storey/dashboard")
                })
                .catch((err) => {
                    console.log(err)
                })
        }

    });
}
exports.search = (req, res) => {
    products.find(
        {
            name: req.params.name
        }
    )
        .then(data => {
            if (data.length != 0) {
                console.log(data)
                let rowSearch = "";
                data.forEach((item, index) => {
                    rowSearch +=
                        `
                    <div class="products-row "><div class="product-cell image"><img src="../public/image/${item.image} " alt="product"><span>${item.name} </span> </div> <div class="product-cell category"><span class="cell-label">Category:</span> ${item.describe} </div> <div class="product-cell status-cell"> <span class="cell-label">Status:</span> <span class="status active">Active</span> </div> <div class="product-cell stock"><span class="cell-label">Stock:</span> ${item.soluong} </div><div class="product-cell price"><span class="cell-label">Price:</span> ${item.price} </div><div class="product-cell sales d-flex justify-content-around"><span class="cell-label ">Sales:</span><button class="btn btn-primary btn_edit"><i class="fa-solid fa-pen-to-square"></i></button><button data-id="${item._id}" class="btn btn-danger btn_delete"><i class="fa-solid fa-trash"></i></button></div></div>
                    `
                });
                res.send(rowSearch)
            } else {
                res.send("----------Không tìm thấy kết quả nào-------")
            }
        })
        .catch(err => {
            console.log("Error search" + err)
        })


}

exports.deleted = (req, res) => {

    products.deleteMany({
        _id: req.params.id
    }, (err, success) => {
        if (err) {
            console.log("Error" + err);
        } else {
            // GỠ FILE TRÊN SERVER
            let path = `./public/image/${req.params.image}`
            fs.unlink(path, function (err) {

                if (err && err.code == 'ENOENT') {
                    // Lỗi tìm không thấy tệp, tệp không tồn tại.
                    console.info("File doesn't exist, won't remove it.");
                } else if (err) {
                    // Đã xảy ra lỗi khi xóa tệp
                    console.error("Error occurred while trying to remove file");
                } else {
                    console.info(`Đã xoá 1 ảnh trong server`);
                }
            });
            res.status(200).send();
        }
    });

}

