import { EyeOutlined } from "@ant-design/icons";

interface RenderPreviewCardProps {
  project: {
    name: string;
    previewImage: string;
  };
}

const RenderPreviewCard: React.FC<RenderPreviewCardProps> = ({ project }) => {
  return (
    <div className="preview-overlay">
      <img src={project.previewImage} alt="Preview" className="preview-image" />
      <EyeOutlined className="view-details-icon" />
    </div>
  );
};

export default RenderPreviewCard;
