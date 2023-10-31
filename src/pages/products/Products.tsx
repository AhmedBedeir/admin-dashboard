import { useState, useEffect } from "react";
import { GridColDef } from "@mui/x-data-grid";
import "./products.scss";
import DataTable from "../../components/dataTable/DataTable";
import Add from "../../components/Add/Add";
import { products } from "../../data";
import { Avatar } from "@mui/material";
const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Image",
    width: 100,
    align: "center",
    headerAlign: "center",
    renderCell: (params) => {
      return (
        <Avatar
          src={params.row.img || "noavatar.png"}
          alt=""
          sx={{
            width: "50px",
            height: "50px",
            objectFit: "cover",
          }}
        />
      );
    },
  },
  {
    field: "title",
    type: "string",
    headerName: "Title",
    width: 250,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "color",
    type: "string",
    headerName: "Color",
    width: 150,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    width: 150,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "producer",
    headerName: "Producer",
    type: "string",
    width: 150,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    align: "center",
    headerAlign: "center",
    type: "string",
  },
  {
    field: "inStock",
    headerName: "In Stock",
    width: 150,
    align: "center",
    headerAlign: "center",
    type: "boolean",
  },
];
const rows = products;
function Products() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="products">
      <div className="info">
        <h2>Products</h2>
        <Add slug="Product" columns={columns} />
      </div>
      <div className="dataTable">
        <DataTable
          loading={loading}
          rows={rows}
          columns={columns}
          slug="product"
        />
      </div>
    </div>
  );
}

export default Products;
