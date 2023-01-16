import { useState } from "react";

type SchedulePickerProps = {
  schedule: any;
  setSchedule(sch: any): void;
};

const SchedulePicker = ({ schedule, setSchedule }: SchedulePickerProps) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  return (
    <div>
      <input
        type="text"
        id="time"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="1분 이상...(초단위 입력)"
        required
      ></input>
    </div>
  );
};

export default SchedulePicker;
