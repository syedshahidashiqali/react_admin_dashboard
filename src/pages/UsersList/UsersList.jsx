import "./UsersList.css";
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
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
                    <button className="userListEdit">Edit</button>
                    <DeleteOutlineIcon className="userListDelete" />
                </>
            )
        } 
    },
];
  
const rows = [
    { 
        id: 1, 
        username: 'Jon Snow', 
        email:"jon@gmail.com", 
        avatar: "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status: "active",
        transaction:"$120.00"
    },
    { 
        id: 2, 
        username: 'Jon Snow', 
        email:"jon@gmail.com", 
        avatar: "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status: "active",
        transaction:"$120.00"
    },
    { 
        id: 3, 
        username: 'Jon Snow', 
        email:"jon@gmail.com", 
        avatar: "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status: "active",
        transaction:"$120.00"
    },
    { 
        id: 4, 
        username: 'Jon Snow', 
        email:"jon@gmail.com", 
        avatar: "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status: "active",
        transaction:"$120.00"
    },
    { 
        id: 5, 
        username: 'Jon Snow', 
        email:"jon@gmail.com", 
        avatar: "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status: "active",
        transaction:"$120.00"
    },
    { 
        id: 6, 
        username: 'Jon Snow', 
        email:"jon@gmail.com", 
        avatar: "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status: "active",
        transaction:"$120.00"
    },
    { 
        id: 7, 
        username: 'Jon Snow', 
        email:"jon@gmail.com", 
        avatar: "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status: "active",
        transaction:"$120.00"
    },
    { 
        id: 8, 
        username: 'Jon Snow', 
        email:"jon@gmail.com", 
        avatar: "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status: "active",
        transaction:"$120.00"
    },
    { 
        id: 9, 
        username: 'Jon Snow', 
        email:"jon@gmail.com", 
        avatar: "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status: "active",
        transaction:"$120.00"
    },
    { 
        id: 10, 
        username: 'Jon Snow', 
        email:"jon@gmail.com", 
        avatar: "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status: "active",
        transaction:"$120.00"
    },
];

function UsersList() {
    return (
        <div className="usersList">
             <DataGrid
                disableSelectionOnClick
                rows={rows}
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[5]}
                checkboxSelection
        />
        </div>
    )
}

export default UsersList;
