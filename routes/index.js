var express = require('express');
var bodyParser = require('body-parser');

var teacher = require('../modules/teacher');
var mca_student = require('../modules/mca_student');
var jwt = require('jsonwebtoken');
const app = require('../app');


// app.use(bodyParser.json());
if(typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage; 
  localStorage = new LocalStorage('./scratch');
}

var router = express.Router();


/* to encrypt use module bcrypt */

/*middlewire function to validate user name  */
function checkUser(req,res,next){
  var username=req.body.uname;
  var password=req.body.password;

  if(username.includes("PGCACA")){
    var checkUser= mca_student.findOne({id:username, password:password});
    checkUser.exec((err, data)=>{
     if(data==null){
       return res.render('login', { title: 'Examination Login', msg:"Invalid Username or Password." });
  
     }else{
  
        if(err) throw err;
        var getUserID=data._id;
        var getUser = data.first_name ;
        var token = jwt.sign({ userID: getUserID }, 'loginToken');
        localStorage.setItem('userToken', token);
        localStorage.setItem('loginUser', getUser);
        return res.redirect('/exam');
        
      }
    });
  }
  else {
      var checkUser= teacher.findOne({id:username, password:password});
      checkUser.exec((err, data)=>{
        if(data==null){
          return res.render('login', { title: 'Examination Login', msg:"Invalid Username or Password." });
  
        }else{
  
          if(err) throw err;
          var getUserID=data._id;
          var getUser = data.first_name ;
          var token = jwt.sign({ userID: getUserID }, 'loginToken');
          localStorage.setItem('userToken', token);
          localStorage.setItem('loginUser', getUser);
          return res.render('login', { title: 'Examination Login', msg:"logged in as teacher "+getUser });
          
        }
      });
  }
 next();

}
        
/* GET login page. */

router.get('/', function(req, res, next) {
  var loginUser=localStorage.getItem('loginUser');
  if(loginUser){
    res.redirect('./exam');
  }else{
  res.render('login', { title: 'Examination Login', msg:'' });
  }
});


/* POST login page */
router.post('/',checkUser, function(req, res, next) {});

/* GET exam deshboard */
router.get('/exam', function(req, res, next) {
  
  var f_name = localStorage.getItem('loginUser')
  res.render('exam', { title: 'Examination Login', f_name:f_name });
  
});
module.exports = router;
