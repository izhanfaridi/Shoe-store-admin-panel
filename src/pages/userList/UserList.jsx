import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteUser, getUsers } from "../../redux/apiCalls";
import { useSelector } from "react-redux";
import Sidebar from "../../components/sidebar/Sidebar";

export default function UserList() {
  const users = useSelector(state=>state.user.users)
  const dispatch = useDispatch();
  useEffect(()=>{
    getUsers(dispatch);
  },[dispatch])

  const handleDelete = (id) => {
    deleteUser(id,dispatch);
  };
  
  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "user",
      headerName: "Users",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={"https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "isAdmin",
      headerName: "Admin",
      width: 120,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
         
            <Link to={"/user/" + params.row._id}>
              <button className="userListEdit">Detail</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() =>  handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
   <>
    <div className="userList">
      <DataGrid
        rows={users}
        disableSelectionOnClick
        columns={columns}
        getRowId={row=>row._id}
        pageSize={8}
        checkboxSelection
      />
    </div>
    </> 
  );
 }
