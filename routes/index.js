var express = require('express');
var router = express.Router();
const userModel = require("./users");
const postModel = require("./post");
const passport = require('passport');


const localStrategy = require("passport-local");
const upload = require('./multer');
passport.use(new localStrategy(userModel.authenticate()));


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {nav: false});
});

// agar muje profile ko protected karana hai --->to middleware
router.get('/profile',  isLoggedIn, async function(req, res, next) {
  const user =  await userModel
  .findOne({username: req.session.passport.user})
  .populate("posts")
  res.render('profile', {user, nav:true});
});


router.get('/show/posts',  isLoggedIn, async function(req, res, next) {
  const user =  await userModel
  .findOne({username: req.session.passport.user})
  .populate("posts")
  res.render('show', {user, nav:true});
});


router.get('/feed', isLoggedIn, async function(req, res, next) {
  const user = await userModel.findOne({username: req.session.passport.user});
  const posts = await postModel.find().populate("user");

  res.render("feed", {user, posts, nav: true});
});




router.get('/add',  isLoggedIn, async function(req, res, next) {
  const user =  await userModel.findOne({username: req.session.passport.user});
  res.render('add', {user, nav:true});
});



router.post('/createboard',  isLoggedIn, upload.single("boardimage"), async function(req, res, next) {
  const user =  await userModel.findOne({username: req.session.passport.user});
  const post = await postModel.create({
    user: user._id,
    title: req.body.title,
    description: req.body.description,
    image: req.file.filename
  });
  user.posts.push(post._id);
  await user.save();
  res.redirect("/profile");
});


router.post ('/fileupload',  isLoggedIn, upload.single("image"), async function(req, res, next) {
  const user =  await userModel.findOne({username: req.session.passport.user});
  user.profileImage= req.file.filename;
  await user.save();
  res.redirect("/profile");

});


// isse humara register page show hua hai or abbb hum nbanayenge 
// jise humara data jayega 
router.get('/register', function(req, res, next) {
  res.render('register',{nav: false});
});

router.post('/register', function(req, res, next) {
   // abb sun dhyan se left wala part wo hai jo users.js file mein
   // schema mein hona chaiye 
   // Right wali side mein form ke andar jo naam diya jata hai wo likhna hai
   // password wali chiz eses nhi deni hoi
const Data =new userModel({
  username: req.body.username,
  email: req.body.email,
  contact: req.body.contact,
  name: req.body.fullname
  
  });

  userModel.register(Data,req.body.password)
  .then(function(){
    passport.authenticate("local")(req, res, function(){
      res.redirect("/profile");
    })
  })
   
});

// LOGIN:----->
router.get('/login',passport.authenticate("local",{
  failureRedirect: "/",
  successRedirect: "/profile",
}), function(req, res, next) {

});

//LOGOUT---->
router.get('/logout', function(req, res, next ){
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});

function isLoggedIn(req,res,next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect("/")
}

 

module.exports = router;
