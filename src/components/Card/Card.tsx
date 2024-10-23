import { FC, ReactNode } from "react";
import Text from "../Text/Text";
import "./Card.css";

interface CardProps {
  image?: string;
  title?: string;
  content: ReactNode;
  actions?: ReactNode;
}

const Card: FC<CardProps> = ({ image, title, content, actions }) => {
  return (
    <div className="card">
      {image && <img src={image} alt={title} className="card-image" />}
      <div className="card-body">
        {title && <Text variant="h3">{title}</Text>}
        <div>{content}</div>
        {actions && <div className="card-actions">{actions}</div>}
      </div>
    </div>
  );
};

export default Card;
