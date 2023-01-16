import { useState } from "react";
import useUpdateSchedule from "../../hooks/useUpdateSchedule";
import Active from "../Indicator/Active";
import Inactive from "../Indicator/Inactive";

type ChangeActiveButtonProps = {
  id: number;
  active: boolean;
};

const ChangeActiveButton = ({ id, active }: ChangeActiveButtonProps) => {
  const [currentActive, setCurrentActive] = useState(active);

  const { mutate } = useUpdateSchedule(() => {
    setCurrentActive(!currentActive);
  });

  const changeActive = () => {
    mutate({ id, active: !currentActive });
  };

  return (
    <button onClick={changeActive}>
      {currentActive ? <Active>Active</Active> : <Inactive>Inactive</Inactive>}
    </button>
  );
};

export default ChangeActiveButton;
