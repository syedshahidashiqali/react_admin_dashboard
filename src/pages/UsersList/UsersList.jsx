import "./UsersList.css";
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {Link} from "react-router-dom";
import { useState } from "react";

// import dumy rows of data table
import {usersRows} from "./dummyData";




function UsersList() {

    const [usersData, setUsersData] = useState(usersRows);

    const handleDelete = id => {
        setUsersData(usersData.filter((item) => item.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'user', headerName: 'User', width: 200, renderCell: (params)=>{
            return (
                <div className="userListUser">
                    <img className="userListImg" src={params.row.avatar} alt="" />
                    <span className="userTitle">Jon Snow</span>
                </div>
            )
        } },
        { field: 'email', headerName: 'Email', width: 130 },
        { field: 'status', headerName: 'Status', width: 130 },
        { field: 'transaction', headerName: 'Transaction', width: 130 },
        { 
            field: 'action', 
            headerName: 'Action',
            renderCell: (params) =>{
                
                return (
                    <>
                        <Link to={`/users/${params.row.id}`}>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteOutlineIcon
                            onClick={() => handleDelete(params.row.id)} 
                            className="userListDelete"
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
                rows={usersData}
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[5]}
                checkboxSelection
        />
        </div>
    )
}

export default UsersList;
