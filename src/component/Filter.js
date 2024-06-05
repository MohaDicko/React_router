//FIlter.js

const Filter = ({ title, rate, onTitleChange, onRateChange }) => {
    return (
      <div className="filter">
        <input 
          type="text" 
          value={title} 
          placeholder="Filter by title" 
          onChange={onTitleChange} 
        />
        <input 
          type="number" 
          value={rate} 
          placeholder="Filter by rate" 
          onChange={onRateChange} 
        />
      </div>
    );
  }

export default Filter
