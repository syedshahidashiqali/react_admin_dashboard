import Chart from "../../components/Chart/Chart";
import "./Product.css";

import {productsData} from "./dummyData";

import PublishIcon from '@mui/icons-material/Publish';


function Product() {
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <a href="/newProduct">
                    <button className="productCreateButton">Create</button>
                </a>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart title="Sales Performance" data={productsData} dataKey="sales" />
                </div>
                <div className="productTopRight">
                    <div className="productTopRightInfoTop">
                        <img 
                            className="productTopRightInfoTopImg" 
                            src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt=""
                        />
                        <span className="productTopRightInfoTopProductName">Apple AirPods</span>
                    </div>
                    <div className="productTopRightInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">ID:</span>
                            <span className="productInfoValue">123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">SALES:</span>
                            <span className="productInfoValue">5123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">ACTIVE:</span>
                            <span className="productInfoValue">YES</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">IN STOCK:</span>
                            <span className="productInfoValue">NO</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form action="" className="productForm">
                    <div className="productFormLeft">
                        <label htmlFor="">Product Name</label>
                        <input type="text" placeholder="Apple AirPod" />
                        <label htmlFor="">In Stock</label>
                        <select name="instock" id="instock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label htmlFor="">Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img className="productFormImg" src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                            <label htmlFor="file">
                                <PublishIcon />
                            </label>
                            <input type="file" name="" id="file" />
                        </div>
                        <button className="productUpdateButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Product;
