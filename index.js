const express=require("express");

const app=express();


const cors = require("cors"); // Import the cors middleware


app.use(cors()); 



const http=require("http").Server(app);

const bodyParser = require("body-parser"); 

const connectDB=require("./database/db.js")

const product=require("./models/product-schema.js")

const dproduct=require("./constrains/product.js")

const user=require("./models/user-schema.js")

const RazorPay=require("razorpay");

const paymentController=require("./controllers/paymentController.js");

const path=require("path");






app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



async function main() {
    try {
      
      await connectDB();
      
     
      

      // await user.insertMany(ddata);

      await product.deleteMany({});

      await product.insertMany(dproduct);
      console.log('Connected to the database successfully');
      
    } catch (error) {
      console.error('Error connecting to the database:', error.message);
    
    }
  }

    // get access of products for frontend

    // In your server index.js file
app.get('/products', async (req, res) => {
  try {
    // Fetch products from the database or any other source
    const products = await product.find(); // Assuming Product is your mongoose model for products
    
    res.status(200).json(products);
  } catch (error) {
    console.error('Error fetching products:', error.message);
    res.status(500).json({ error: 'An error occurred while fetching products' });
  }
});


  // for login

  // ... (other imports and setup)

app.post("/login", async (req, res) => {
  try {
      const { username,password } = req.body;
      
      console.log(username);

      // Query the database to check if the credentials match
      const userfind = await user.findOne({ email: username, password: password });

      if (userfind) {
          res.status(200).json({ firstName: userfind.firstName });
      } else {
          res.status(401).json({ error: "Invalid credentials" });
      }
  } catch (error) {
      console.error("Error during login:", error.message);
      res.status(500).json({ error: "An error occurred" });
  }
});




  // for sign up
  app.post("/submit", async (req, res) => {
    try {
      const formData = req.body; // Assuming your form data is sent as JSON

      console.log(formData);
      await user.create(formData);
      res.status(201).json({ message: "Data saved successfully" });
    } catch (error) {
      console.error("Error saving data:", error.message);
      res.status(500).json({ error: "An error occurred" });
    }
  });


  // API endpoint to fetch product details by productId
app.get('/products/:productId', async (req, res) => {
  try {
    const productId = req.params.productId;
    
    const prod = await product.findOne({ id: productId });
    // console.log("product");

    if (!prod) {
      return res.status(404).json({ error: 'Product not found'});
    }

    res.status(200).json(prod);
  } catch (error) {
    console.error('Error fetching product details:', error.message);
    res.status(500).json({ error: 'An error occurred while fetching product details' });
  }
});


app.post("/orders",paymentController.orders);


  



app.get("",(req,res)=>{

    res.send("hellow sougata!")
    console.log("hello sougata");
})

app.use(express.static(path.join(__dirname,'./my-app/build')))

app.get('*',function(_,res){
    res.sendFile(path.join(__dirname,"./my-app/build/index.html"),function(err){
      res.status(500).send(err)
    })
})

const PORT=process.env.PORT || 8000;
http.listen(9000,()=>{

    console.log("listening.......9000");
})

main();