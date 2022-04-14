const accUser = require("../models/AccountUser");

//Đăng kí user
exports.addUser = (req, res) => {
  accUser.create({
    tentaikhoan: req.body.tentaikhoan,
    tennguoidung: req.body.tennguoidung,
    email: req.body.email,
    matkhau: req.body.matkhau
  })
    .then(() => {
        res.redirect("http://localhost:3000/Storey/dashboard/quan-ly-user")
    })
    .catch((err) => {
        console.log(err)
    })
};

//Xóa User khỏi database
exports.delUser = (req, res) => {
    
};

//Sửa tài khoản User
exports.editUser = (req, res) => {

};

exports.login = (req, res) => {
  res.render("dangnhap_dangky");
};




//View quản lí accUser
exports.viewAccUser = (req, res) => {
    accUser.find((err, data) => {
        if (err) {
            res.json("Lỗi :(")
        } else {
            res.render('quan_ly_user', { accountUser: data })
        }
    })


}