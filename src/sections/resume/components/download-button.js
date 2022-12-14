import { Container, Col, Row } from "react-bootstrap";
import { CloudDownload, HddFill } from "react-bootstrap-icons";
const DownloadButton = () => {
  const iconSize = 30;
  return (
    <a
      className="face-button"
      href="https://usaupload.com/6Pfx/maryam_moshtoofar.pdf"
    >
      <div className="face-primary">
        <CloudDownload size={iconSize} className="icon fa fa-cloud" />
        Download
      </div>

      <div className="face-secondary">
        <HddFill size={iconSize} className="icon fa fa-hdd-o" />
        Size: 0.5 mb
      </div>
    </a>
  );
};

export default DownloadButton;
