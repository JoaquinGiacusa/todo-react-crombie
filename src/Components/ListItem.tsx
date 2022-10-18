import React from "react";

type ListItemProps = {
  className?: string;
  text: string;
  checked?: boolean;
  onChange?: (value: boolean) => void;
  onDelete?: () => void;
};

const ListItem: React.FC<ListItemProps> = ({
  className,
  text,
  checked = true,
  onChange,
  onDelete,
}) => {
  const handleOnClick = () => {
    onChange?.(!checked);
  };

  return (
    <div className={`list-item${className ? " " + className : ""}`}>
      <div className="list-item" onClick={handleOnClick}>
        <input
          type="checkbox"
          defaultChecked={checked}
          style={{ pointerEvents: "none" }}
        />
        <p>{text}</p>
      </div>
      <button onClick={onDelete} className="delete-btn">
        X
      </button>
    </div>
  );
};

export default ListItem;

/**
 * Si estas aca es porque te mató la curiosidad... I like it 😏 (?) O bien, dije que abrieras este archivo (?
 *
 * Si no tenes mucha idea de lo que esta pasando, no te preocupes que voy a hablar de esto.
 * Pero basicamente esto es "componetizar"
 */
