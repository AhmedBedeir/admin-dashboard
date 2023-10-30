import "./users.scss";
import DataTable from "../../components/dataTable/DataTable";
import { userRows } from "../../data";
import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Avatar } from "@mui/material";
import Add from "../../components/Add/Add";
const rows = userRows;
const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    width: 90,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "avatar",
    headerName: "Avatar",
    width: 100,
    align: "center",
    headerAlign: "center",
    renderCell: ({ row }) => (
      <Avatar
        src={row.img || "noavatar.png"}
        sx={{
          width: "32px",
          height: "32px",
          objectFit: "cover",
        }}
      />
    ),
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 170,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 150,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    align: "center",
    headerAlign: "center",
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "email",
    headerName: "Email",
    type: "string",
    width: 180,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "verified",
    headerName: "Verified",
    width: 100,
    type: "boolean",
    align: "center",
    headerAlign: "center",
  },
];
function Users() {
  return (
    <div className="users">
      <div className="info">
        <h2>Users</h2>
        <Add slug="User" columns={columns} />
      </div>
      <div className="dataTable">
        <DataTable rows={rows} columns={columns} slug="user" />
      </div>
    </div>
  );
}

export default Users;
