import React from 'react';

const Tourcard = ({ tour, onRemove }) => {
  return (
    <article className="tour-card">
      <img src={tour.image} alt={tour.name} />
      <div className="tour-info">
        <div className="tour-header">
          <h4>{tour.name}</h4>
          <h4 className="tour-price">${tour.price}</h4>
        </div>
        <p>{tour.info}</p>
        <button className="btn" onClick={() => onRemove(tour.id)}>
          Not Interested
        </button>
      </div>
    </article>
  );
};

export default Tourcard;