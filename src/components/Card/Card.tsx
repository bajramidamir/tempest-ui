import { FC, ReactNode } from "react";
import Text from "../Text/Text";
import "./Card.css";

interface CardProps {
  avatar?: ReactNode;
  avatarTitle?: string;
  image?: string;
  title?: string;
  content: ReactNode;
  actions?: ReactNode;
}

const Card: FC<CardProps> = ({
  avatar,
  avatarTitle,
  image,
  title,
  content,
  actions,
}) => {
  return (
    <div className="card">
      {avatar && (
        <div className="card-avatar">
          {avatar}
          <p>{avatarTitle}</p>
        </div>
      )}

      {image && (
        <img
          src={image}
          alt={title}
          className={avatar ? "card-image" : "card-image-rounded"}
        />
      )}
      <div className="card-body">
        {title && <Text variant="h3">{title}</Text>}
        <div>{content}</div>
        {actions && <div className="card-actions">{actions}</div>}
      </div>
    </div>
  );
};

export default Card;
