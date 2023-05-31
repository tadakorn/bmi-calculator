import { useRef, useState } from "react";
import "./App.css";
import BmiResult from "./components/BmiResult";
import styles from "./components/MyProject.module.css";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(0);

  const heightRef = useRef<HTMLInputElement>(null);
  const weightRef = useRef<HTMLInputElement>(null);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === "weight") {
      setWeight(Number(value));
    } else if (name === "height") {
      setHeight(Number(value));
    }
  };

  const calculateBmi = () => {
    // const bmi = weight / ((height / 100) * (height / 100));

    const bmi = weight / (height / 100) ** 2;
    setBmi(bmi);
  };

  return (
    <div className="bmi-app">
      <h1 className={styles["title"]}>BMI Calculator</h1>
      <p className={styles["subtitle"]}>โปรแกรมคำนวณค่าดัชนีมวลกาย - BMI</p>

      <label htmlFor="weight">น้ำหนัก (kg)</label>
      <input
        type="number"
        name="weight"
        ref={weightRef}
        onChange={handleOnChange}
      />

      <label htmlFor="height">ส่วนสูง (cm)</label>
      <input
        type="number"
        name="height"
        ref={heightRef}
        onChange={handleOnChange}
      />
      <button type="button" onClick={calculateBmi}>
        คำนวณ
      </button>

      <BmiResult bmi={bmi} />
    </div>
  );
}

export default App;
