"use client";

import { useState } from "react";

export default function ExpenseManager() {
  const [income, setIncome] = useState([]);
  const [expence, setExpence] = useState([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");

  function addIncome() {
    // yuch bicheegui bol butsaana
    if (input.trim() === "") return;

    const newIncome = {
      // datenow() shuud bichsen ued ni id uusgedeg
      id: Date.now(),
      text: input.trim(),
    };

    setIncome([...income, newIncome]);

    // shine ajil nemegdsnii daraa hoosoldog
    setInput("");
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Орлого оруулах"
        className="border p-3 rounded-lg text-black  flex-1 min-w-0"
      />

      <button
        onClick={addIncome}
        className="bg-blue-500 text-gray-white px-4  rounded-lg hover:bg-blue-600"
      >
        Орлого нэмэх
      </button>

      {income.map((item) => (
        <p key={item.id}>{item.text}</p>
      ))}
    </div>
  );
}
