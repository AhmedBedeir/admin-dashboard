import Box from "@mui/material/Box";
import "./dataTable.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { GridColDef } from "@mui/x-data-grid";
import { Avatar } from "@mui/material";

type Props = {
  columns: GridColDef[];
  rows: object[];
  slug: string;
  loading?: boolean;
};

export default function DataTable({ columns, rows, slug, loading }: Props) {
  const action: GridColDef = {
    field: "action",
    headerName: "Action",
    width: 80,
    align: "center",
    headerAlign: "center",
    renderCell: ({ row }) => (
      <div className="actions">
        <Link to={`/${slug}/${row.id}`}>
          <Avatar src="view.svg" />
        </Link>
        <div className="delete" onClick={() => handleDelete(slug, row.id)}>
          <Avatar src="delete.svg" />
        </div>
      </div>
    ),
  };
  const handleDelete = (slug: string, id: string) => {
    alert(`Delete ${slug} ${id}`);
  };
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        sx={{
          background: "#fff",
          padding: "20px 10px",
          height: "600px",
        }}
        rowHeight={68}
        loading={loading}
        rows={rows}
        columns={[...columns, action]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 6,
            },
          },
        }}
        slots={{
          toolbar: GridToolbar,
        }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: {
              debounceMs: 500,
            },
          },
        }}
        pageSizeOptions={[6]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </Box>
  );
}
