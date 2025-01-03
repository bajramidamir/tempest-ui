import { FC, ReactNode } from "react";
import Text from "../Text/Text";
import "./Card.css";
import React from "react";

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
    <div
      className="card"
      role="region"
      aria-labelledby={title ? "card-title" : undefined}
    >
      {avatar && (
        <div className="card-avatar" aria-labelledby="card-avatar-title">
          {avatar}
          {avatarTitle && <p id="card-avatar-title">{avatarTitle}</p>}
        </div>
      )}

      {image && (
        <img
          src={image}
          alt={title ? `${title} image` : "Card image"}
          className={avatar ? "card-image" : "card-image-rounded"}
        />
      )}
      <div className="card-body">
        {title && <Text variant="h3">{title}</Text>}
        <div className="card-content">{content}</div>
        {actions && <div className="card-actions">{actions}</div>}
      </div>
    </div>
  );
};

export { CardProps };
export default Card;
