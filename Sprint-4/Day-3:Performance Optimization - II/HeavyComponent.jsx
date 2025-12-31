import React from "react";

function HeavyComponent() {
  console.log("HeavyComponent rendered!");

  return (
    <div style={{ marginTop: "20px", padding: "10px", border: "1px solid gray" }}>
      <h2>Heavy Component</h2>
      <p>This is a simulated heavy UI section.</p>
    </div>
  );
}

// Wrap with React.memo to prevent re-renders
export default React.memo(HeavyComponent);
