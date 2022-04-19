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

exports.show = async (req, res) => {
    try{
      const allProducts = await products.find();
      return res.status(200).render('dashboard',{danhsach: allProducts});
    }
    catch(err){
        return err;
    }
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

exports.search = async (req, res) => {
    try{
      let allSearch = await products.find({name:req.params.name});
      return res.status(200).render('search_admin',{array: allSearch});
    }
    catch(err){
        return err;
    }
  }

exports.deleted = async (req, res) => {

    try{
        await products.deleteMany({_id: req.params.id})
        const productsList =  await this.show(req,res);
         // GỠ FILE TRÊN SERVER
         let path =`./public/image/${req.params.image}`
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
       
        return await res.status(200).send();
    }
    catch(err){
        return res.json(err);
    }
    
}

exports.update = (req, res) => {
    products.findByIdAndUpdate(req.params.id,(data)=>{
        console.log(data)
    })

}

