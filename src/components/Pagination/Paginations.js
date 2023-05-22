import React, { useEffect, useCallback, useMemo, useState } from 'react';
import './styles.css';


function Pagination({ pages = 10, setCurrentPage }) {

  const numberOfPages =  useMemo(() => {
    return [...Array(pages).keys()]
  }, [pages]);

  const [currentButton, setCurrentButton] = useState(1)


  const changeArray = useCallback(()=>{
    let tempNumberOfPages = []
    for(let i=0; i<5;i++){
        if(currentButton+i <= numberOfPages.length)
            tempNumberOfPages.push(i+currentButton);
    }
    setCurrentPage(currentButton)
    return tempNumberOfPages
  }, [currentButton, numberOfPages, setCurrentPage]);

  useEffect(() => {
        changeArray();
    }, [currentButton, changeArray])


  return (
    <div className="pagination-container">
      <button
        className={`${currentButton === 1 ? 'disabled' : ''}`}
        onClick={() => setCurrentButton(1)}
      >
      &lt;&lt;

      </button>

      <button
        className={`${currentButton === 1 ? 'disabled' : ''}`}
        onClick={() => setCurrentButton(prev => prev <= 1 ? prev : prev - 1)}
      >
      &lt;
      </button>

      {changeArray().map(((item, index) => {
        return <button
            key={index}
          className={`${currentButton === item ? 'active' : ''}`}
          onClick={() => setCurrentButton(item)}
        >
          {item}
        </button>
      }))}

      <button
        className={`${currentButton === numberOfPages.length ? 'disabled' : ''}`}
        onClick={() => setCurrentButton(prev => prev >= numberOfPages.length ? prev : prev + 1)}
      >
        &gt;
      </button>

      <button
        className={`${currentButton === numberOfPages.length ? 'disabled' : ''}`}
        onClick={() => setCurrentButton(numberOfPages.length)}
      >
      &gt;&gt;
      </button>


    </div>
  );
}


export default Pagination