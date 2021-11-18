import { useState } from "react";
import "./ProductList.css";
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {Link} from "react-router-dom";
// import dummyData
import {productsRows} from "./dummyData";

function ProductList() {
    const [productsData, setProductsData] = useState(productsRows);

    const handleDelete = id => {
        setProductsData(productsData.filter((item) => item.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'product', headerName: 'Product', width: 200, renderCell: (params)=>{
            return (
                <div className="productListItem">
                    <img className="productListImg" src={params.row.img} alt="" />
                    <span className="productTitle">{params.row.name}</span>
                </div>
            )
        } },
        { field: 'stock', headerName: 'Stock', width: 130 },
        { field: 'status', headerName: 'Status', width: 130 },
        { field: 'price', headerName: 'Price', width: 130 },
        { 
            field: 'action', 
            headerName: 'Action',
            renderCell: (params) =>{
                
                return (
                    <>
                        <Link to={`/products/${params.row.id}`}>
                            <button className="productListEdit">Edit</button>
                        </Link>
                        <DeleteOutlineIcon
                            onClick={() => handleDelete(params.row.id)} 
                            className="productListDelete"
                        />
                    </>
                )
            } 
        },
    ];

    return (
        <div className="usersList">
             <DataGrid
                disableSelectionOnClick
                rows={productsData}
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[5]}
                checkboxSelection
        />
        </div>
    )
};

export default ProductList;
