import { useState } from "react";
import Tree from "./Tree";
import "./Treenode.css";
import Modal from "../Modal";
import {
  Remove as RemoveIcon,
  Add as AddIcon,
  MoreVert as MoreVertIcon,
} from "@mui/icons-material";
import { useStore } from "../Context";
const Treenode = ({ node, index }) => {
  const [open, setOpen] = useState(false);
  const { store, setSubFolder } = useStore();
  const { childFolders, folderName } = node;

  const [showChildren, setShowChildren] = useState(false);

  const handleClick = () => {
    setShowChildren(!showChildren);
  };

  const subFolders = (subfolder) => {
    console.log(node);
    node["childFolders"] = [{ folderName: subfolder }];
    console.log(store, "store");
  };

  const openModal = (index) => {
    console.log(index);
    setOpen(true);
  };
  return (
    <>
      <div className="label" style={{ marginBottom: "2px", height: "40px" }}>
        <div className="remove-label">
          <div>
            <RemoveIcon fontSize="small" sx={{ color: "white" }} />
          </div>
          <div>
            <div onClick={handleClick} S>
              <span style={{ fontSize: "18px", mb: 1, color: "white" }}>
                {folderName}
              </span>
            </div>
            <div className="add-option">
              <div>
                <button className="btn">
                  <AddIcon
                    onClick={() => openModal(index)}
                    fontSize="small"
                    sx={{ color: "white" }}
                  />
                </button>
              </div>
              <div>
                <button className="btn">
                  <MoreVertIcon fontSize="small" sx={{ color: "white" }} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ul className="unorderlist-branch">
        {showChildren && <Tree store={childFolders} />}
      </ul>
      <Modal open={open} setOpen={setOpen} folders={subFolders} />
    </>
  );
};

export default Treenode;
