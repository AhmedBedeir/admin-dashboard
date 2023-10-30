import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import "./add.scss";
import { useState } from "react";
import { GridColDef } from "@mui/x-data-grid";

type Props = {
  slug: string;
  columns: GridColDef[];
};

function Add({ slug, columns }: Props) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box className="add">
      <Button
        variant="contained"
        size="small"
        color="inherit"
        onClick={handleOpen}
      >
        {`Add New ${slug}`}
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <Box className="dialog">
          <DialogTitle>{`Add New ${slug}`}</DialogTitle>
          <DialogContent
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
            dividers
          >
            {columns
              .filter(
                (cl) =>
                  cl.field !== "id" &&
                  cl.field !== "actions" &&
                  cl.field !== "avatar" &&
                  cl.field !== "fullName" &&
                  cl.type !== "boolean" &&
                  cl.field !== "createdAt" &&
                  cl.field !== "img"
              )
              .map((cl) => {
                return (
                  <TextField
                    margin="normal"
                    sx={{ width: "49%" }}
                    variant="outlined"
                    key={cl.field}
                    type={cl.type}
                    label={cl.headerName}
                  />
                );
              })}
          </DialogContent>
          <DialogActions>
            <Button variant="contained" fullWidth color="secondary">
              Save
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </Box>
  );
}

export default Add;
