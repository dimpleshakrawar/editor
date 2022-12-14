import { useState } from "react";
import "../Style/drawer.css";
import Tree from "../components/TreeComponent/Tree";
import Modal from "./Modal";
import {
  Add as AddIcon,
  OpenInFull as OpenInFullIcon,
  KeyboardDoubleArrowLeft as KeyboardDoubleArrowLeftIcon,
} from "@mui/icons-material";
import { Divider } from "@mui/material";
import { useStore } from "../components/Context";

const Container = () => {
  const [modal, setModal] = useState(false);
  const { store, setFolder } = useStore();

  const folders = (folderName) => {
    const data = { folderName };
    setFolder(data);
    console.log(store, "store-container");
  };

  const openModal = () => {
    setModal(true);
  };

  const module = ["All", "Board", "Graph", "Create"];

  return (
    <div className="container">
      <div className="module-container">
        {module.map((fileName) => (
          <div key={fileName}>
            <button className="module-btn">{fileName}</button>
          </div>
        ))}
      </div>
      <div className="icon-container">
        <div>
          <button className="add-btn">
            <AddIcon style={{ cursor: "pointer" }} onClick={openModal} />
          </button>
        </div>
        <div>
          <button className="expand-btn">
            <OpenInFullIcon />
          </button>
        </div>
        <div>
          <button className="double-arrow-btn">
            <KeyboardDoubleArrowLeftIcon />
          </button>
        </div>
      </div>
      <Divider light />
      <>
        <Tree treeData={store} />
      </>
      <Modal open={modal} setOpen={setModal} folders={folders} />
    </div>
  );
};

export default Container;
