import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calendar.scss";
import { useState } from "react";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const CalendarComponent = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
};

export default CalendarComponent;
