import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTodoById } from "../api/todoService";

const TodoDetails = () => {
  const { id } = useParams();
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    const fetchTodo = async () => {
      const data = await getTodoById(id);
      setTodo(data);
    };
    fetchTodo();
  }, [id]);

  if (!todo) return <p>Loading...</p>;

  return (
    <div>
      <h2>Todo Details</h2>
      <p><strong>ID:</strong> {todo.id}</p>
      <p><strong>Title:</strong> {todo.title}</p>
      <p><strong>Status:</strong> {todo.completed ? "✅ Completed" : "❌ Pending"}</p>
    </div>
  );
};

export default TodoDetails;
