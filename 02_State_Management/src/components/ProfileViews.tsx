import { useState } from "react";

export function ProfileViews() {
  const [num, setNum] = useState(0);

  return (
    <div>
      <h1>Profile Views</h1>
      <p>{num}</p>

      {/* arrow func. is passed in onClick, as normal function executes right away */}
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        Increase Views
      </button>
    </div>
  );
}
