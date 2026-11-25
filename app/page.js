"use client";

import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  // Нийт зардлыг бодох
  const total = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  const isFormValid = name.trim() !== "" && Number(amount) > 0;

  // Зардал нэмэх
  const addExpence = (event) => {
    event.preventDefault();

    if (!isFormValid) {
      return;
    }

    const newExpence = {
      id: Date.now(),
      name: name.trim(),
      amount: Number(amount),
    };

    setExpenses([...expenses, newExpence]);

    setName("");
    setAmount("");
  };

  // Зардал устгах
  const deleteExpence = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 p-8 bg-white shadow-lg rounded-[40px]">
      <h1 className="text-4xl text-slate-900 font-bold mb-10">
        💸 Зардлын тэмдэглэл
      </h1>

      {/* Нийт зардал */}
      <div className="bg-slate-900 rounded-[30px] p-10 mb-10">
        <p className="text-slate-400 text-2xl mb-2">НИЙТ</p>

        <h1 className="text-white text-6xl font-bold">
          {total.toLocaleString()} ₮
        </h1>
      </div>

      {/* Зардал нэмэх form */}
      <form onSubmit={addExpence} className="flex flex-col gap-5">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Юунд зарцуулсан бэ?"
          className="border-2 border-slate-300 p-5 rounded-3xl text-black text-2xl outline-none focus:border-emerald-500"
        />

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Дүн (₮)"
          className="border-2 border-slate-300 p-5 rounded-3xl text-black text-2xl outline-none focus:border-emerald-500"
        />

        <button
          type="submit"
          disabled={!isFormValid}
          className="bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-300 text-white text-2xl font-bold p-5 rounded-3xl"
        >
          Нэмэх
        </button>
      </form>

      {/* Зардлын жагсаалт */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-5">
          Зардлын жагсаалт
        </h2>

        {expenses.map((expense) => (
          <div
            key={expense.id}
            className="flex justify-between items-center border-b p-4"
          >
            <div>
              <p className="text-xl font-semibold text-slate-800">
                {expense.name}
              </p>

              <p className="text-emerald-600 font-bold">
                {expense.amount.toLocaleString()} ₮
              </p>
            </div>

            <button
              onClick={() => deleteExpence(expense.id)}
              className="text-red-500 font-bold"
            >
              Устгах
            </button>
          </div>
        ))}

        {expenses.length === 0 && (
          <p className="text-slate-400 text-center p-5">
            Одоогоор зардал бүртгээгүй байна.
          </p>
        )}
      </div>
    </div>
  );
}
