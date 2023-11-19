import React from 'react';
import "./progress-ven-diagram.css";

export const ProgressVenDiagram = () => {
    return (
      <div className="progress-ven-diagram">
        {["first", "second"].map((circle) => (
          <span
            className={`progress-ven-diagram__circle progress-ven-diagram__circle--${circle}`}
          ></span>
        ))}
      </div>
    );
}