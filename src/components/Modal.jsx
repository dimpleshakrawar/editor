import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Grid,
} from "@mui/material";
import { Folder as FolderIcon, Save as SaveIcon } from "@mui/icons-material";
import { useState } from "react";

const Modal = ({ open, setOpen, folders }) => {
  const [folderName, setFolderName] = useState([]);

  const handleSubmit = () => {
    folders(folderName);
  };
  return (
    <div>
      <Dialog open={open} onClose={() => setOpen(false)} fullWidth>
        <DialogContent>
          <Grid
            container
            alignItems={"center"}
            style={{ marginBottom: "20px" }}
          >
            <FolderIcon fontSize="large" style={{ marginRight: "7px" }} />
            <DialogContentText sx={{ fontWeight: "bold" }}>
              Create new folder
            </DialogContentText>
          </Grid>
          <Grid container flexDirection={"column"} gap={"10px"}>
            <Grid item>
              <TextField
                placeholder="Folder Name"
                autoFocus
                focused
                margin="dense"
                name="folderName"
                fullWidth
                variant="outlined"
                size="small"
                onChange={(e) => setFolderName(e.target.value)}
                // error={errors.folderName ? true : false}
                // helperText={errors.folderName?.message}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            color="error"
            size="small"
            onClick={() => setOpen(false)}
          >
            Close
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="small"
            loadingPosition="start"
            startIcon={<SaveIcon />}
            onClick={handleSubmit}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Modal;
