"use client";
export default function Test() {
  return (
    <div
      style={{
        width: 300,
        height: 100,
        background: 'yellow',
        border: '4px solid blue',
        zIndex: 999999,
        position: 'relative',
        cursor: 'pointer',
        margin: '2rem auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 24,
      }}
      onClick={() => alert('Test Clicked!')}
    >
      Test Card (Click Me)
    </div>
  );
} 