import { CloudDownload, HddFill } from "react-bootstrap-icons";
const DownloadButton = () => {
  const iconSize = 30;
  return (
    <a
      className="download-button"
      href="https://drive.google.com/file/d/15eCHlnnbWv_H7Pr_8T2LdKCHjr__XL8U/view?usp=sharing"
      target="_blank"
      rel="noreferrer"
    >
      <div className="download-primary">
        <CloudDownload size={iconSize} className="icon fa fa-cloud" />
        Download
      </div>

      <div className="download-secondary">
        <HddFill size={iconSize} className="icon fa fa-hdd-o" />
        Size: 0.5 MB
      </div>
    </a>
  );
};

export default DownloadButton;
