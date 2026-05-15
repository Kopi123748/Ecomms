const express = require('express');
const multer = require('multer');
const session = require('express-session');
const flash = require('connect-flash');
const app = express();

require('dotenv').config();

// const productController = require('./controllers/productController');
// const catalogController = require('./controllers/catalogController'); 
// const registerController = require('./controllers/registerController');
// const loginController = require('./controllers/loginController');
// const ewalletController = require('./controllers/ewalletController');
// const cartController = require('./controllers/cartController');
// const orderController = require('./controllers/orderController');
// const paypalController = require('./controllers/paypalController');
// const netsQrController = require('./controllers/netsQrController')
// const userController = require('./controllers/userController');
// const generateReportController = require('./controllers/generateReport');


// // Import middleware
// const { checkAuthenticated, checkAdmin, checkUser  } = require('./middleware/auth');
// const { validateRegistration, validateLogin } = require('./middleware/validation');
// const bodyParser = require('body-parser');

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });

// Set up view engine and static files
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

// Configure session and flash
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 }
}));

app.use((req, res, next) => {
    res.locals.session = req.session;
    next();
});

app.use(flash());

// Define routes
app.get("/", (req, res) => {
  res.render("indexcustomer", { currentPage: "home" });
});
// app.get('/products', productController.getProducts);
// app.get('/product/:id', productController.getProduct);
// app.get('/addProduct', productController.addProductForm);
// app.post('/addProduct', upload.single('productImage'), productController.addProduct);
// app.get('/editProduct/:id', productController.editProductForm);
// app.post('/editProduct/:id', upload.single('productImage'), productController.editProduct);
// app.get('/deleteProduct/:id', productController.deleteProduct);

// app.get('/catalog', catalogController.getProducts);
// app.get('/products/:id', catalogController.getProduct);

// app.get('/register', registerController.getRegister);
// app.post('/register', registerController.postRegister);

// app.get('/login', loginController.getLogin);
// app.post('/login', loginController.postLogin);  
// app.get('/logout', checkAuthenticated, userController.logout);


// app.get('/index2', (req, res) => res.render('index2', { currentPage: 'admin' }));

// app.get('/ewalletlogin', ewalletController.getEwalletlogin);
// app.get('/ewalletTopup', ewalletController.getEwalletTopup);
// app.get('/ewalletVisa', ewalletController.getEwalletVisa);
// app.get('/ewalletMaster', ewalletController.getEwalletMaster);

// // Shopping Cart routes
// app.get('/cart', [checkAuthenticated, checkUser ], cartController.getCart);
// app.post('/addToCart/:id', [checkAuthenticated, checkUser ], cartController.addToCart);
// app.post('/updateCartProduct/:id', [checkAuthenticated, checkUser ], cartController.updateCartProduct);
// app.get('/removeFromCart/:id', [checkAuthenticated, checkUser ], cartController.removeFromCart);
// app.get('/checkout', [checkAuthenticated, checkUser ], cartController.checkout);

// // PayPal route
// app.use(express.json());
// app.post("/api/orders", paypalController.createOrderHandler);
// app.post("/api/orders/:orderID/capture", paypalController.captureOrderHandler);
// app.get("/checkout/:paymentMethod/:orderId/:transactionId", cartController.checkout);

// app.get("/invoice", cartController.getInvoice);


// app.get('/viewOrders', [checkAuthenticated, checkUser], orderController.getmyOrders);
// app.get('/orders', orderController.getOrders)


// // edit users
// app.get('/users',  userController.getUsers);
// app.get('/user/:id',  userController.getUser);
// app.get('/editUser/:id', userController.editUserForm);
// app.post('/editUser/:id', userController.editUser);
// app.get('/deleteUser/:id', userController.deleteUser);

// // nets
// // nets
// app.get("/netQRHome", (req, res) => { 
//     res.render("netsQRHome") 
// });

// app.post('/generateNETSQR', netsQrController.generateQrCode);

// // Apply authentication middleware to ensure user is logged in
// app.get("/nets-qr/success", [checkAuthenticated, checkUser], (req, res) => {
//     netsQrController.getInvoice2(req, res);
// });

// app.get("/nets-qr/fail", (req, res) => {
//     res.render('netsTxnFailStatus', { message: 'Transaction Failed. Please try again.' });
// });

// app.get("/netTxnSuccessStatus", netsQrController.checkout)




// // Add route for generating reports
// app.get('/generateReport', checkAuthenticated, checkAdmin, generateReportController.generateReport);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));