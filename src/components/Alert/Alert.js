import React, { useState } from "react";
import "./styles.css";

export const Alert = ({ variant, message }) => {
  const [open, setOpen] = useState(true);
  console.log(message);
  if (open)
    return (
      <div
        className="alert-container"
        style={{
          background: variant.mainColor,
          border: "0.1rem solid " + variant.secondaryColor,
        }}
      >
        <div
          className="symbol-container"
          style={{ background: variant.secondaryColor }}
        >
          <span className="symbol">
            {variant.symbol === "success" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                baseProfile="tiny"
                version="1.2"
                viewBox="0 0 24 24"
                id="tick"
              >
                <path d="M16.972 6.251a1.999 1.999 0 0 0-2.72.777l-3.713 6.682-2.125-2.125a2 2 0 1 0-2.828 2.828l4 4c.378.379.888.587 1.414.587l.277-.02a2 2 0 0 0 1.471-1.009l5-9a2 2 0 0 0-.776-2.72z" />
              </svg>
            ) : (
              ""
            )}
          </span>
        </div>
        <div className="description-container">
          <span className="description-title">{variant.title}:</span>
          <span className="description-text">{message}</span>
        </div>
        <button className="symbol-close-link" onClick={() => setOpen(false)}>
          <span className="">X</span>
        </button>
      </div>
    );
};
