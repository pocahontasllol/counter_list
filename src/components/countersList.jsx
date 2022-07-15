import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState = [
    { id: 0, value: 1, name: "Ненужная вещь", price: "200" },
    { id: 1, value: 4, name: "Ложка" },
    { id: 2, value: 3, name: "Вилка" },
    { id: 3, value: 2, name: "Тарелка" },
    { id: 4, value: 1, name: "Набор минималиста" },
  ];
  const [counters, setCounters] = useState(initialState);
  const handleDelete = (id) => {
    const newCounters = counters.filter((c) => c.id !== id);
    setCounters(newCounters);
  };
  const handleIncrement = (id) => {
    const plus = counters.map((item) => {
      if (item.id === id) {
        item.value += 1;
      }
      return item;
    });
    setCounters(plus);
  };
  const handleDecrement = (id) => {
    const minus = counters.map((item) => {
      if (item.id === id) {
        item.value -= 1;
      }
      return item;
    });
    setCounters(minus);
  };
  const handleReset = () =>{
    setCounters(initialState)
  }
  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          {...count}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>сброс</button>
    </>
  );
};
export default CountersList;
