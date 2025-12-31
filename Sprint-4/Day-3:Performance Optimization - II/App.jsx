import React, { useState, Suspense, lazy } from "react";

// Lazy load the heavy component
const HeavyComponent = lazy(() => import("./HeavyComponent"));

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "20px" }}>
      <h1>React.memo & Lazy Loading Demo</h1>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Counter</button>

      {/* Lazy load with Suspense */}
      <Suspense fallback={<div>Loading heavy component...</div>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
}

export default App;
