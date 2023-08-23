import "./styles.css";

export default function App() {
  const details = [
    { name: "minal", age: 35 },
    { name: "swati", age: 37 },
    { name: "sneha", age: 33 },
    { name: "riya", age: 30 }
  ];
  return (
    <div className="App">
      <ul>
        {details.map((detail, index) => {
          return (
            <div key={index}>
              <li>{detail.name}</li>
              <li>{detail.age}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
