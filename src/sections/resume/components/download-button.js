import { Container, Col, Row } from "react-bootstrap";
import { CloudDownload, HddFill } from "react-bootstrap-icons";
const DownloadButton = () => {
  const iconSize = 30;
  return (
    <a className="face-button" href="#">
      <div className="face-primary">
        <CloudDownload size={iconSize} className="icon fa fa-cloud" />
        Download
      </div>

      <div className="face-secondary">
        <HddFill size={iconSize} className="icon fa fa-hdd-o" />
        Size: 52 kt
      </div>
    </a>
  );
};

export default DownloadButton;
