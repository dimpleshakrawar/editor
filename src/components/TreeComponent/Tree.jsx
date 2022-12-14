import Treenode from "./Treenode";
import "./Treenode.css";
export default function Tree({ treeData }) {
  return (
    <ul style={{ padding: "0px" }} className="unorderlist">
      {treeData.folders?.map((node, index) => (
        <Treenode node={node} index={index} />
      ))}
    </ul>
  );
}
