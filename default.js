
// import { products } from "./constrains/product";
import Product from "./model/product-schema";

const DefaultData=async()=>{

    try{
        // await Product.deleteMany({});
        await Product.insertMany(products);
        console.log('data imported successfully');
    }
    catch(error){

        console.log("error while inserting data ",error.message);
    }
}
export default DefaultData;