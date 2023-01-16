import useDeleteSchedule from "../../hooks/useDeleteSchedule";

type DeleteScheduleButtonProps = {
  id: number;
};

const DeleteScheduleButton = ({ id }: DeleteScheduleButtonProps) => {
  const { mutate } = useDeleteSchedule();

  const handleClick = () => {
    mutate(id);
  };

  return (
    <button
      onClick={handleClick}
      type="button"
      className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-1 mr-1 mb-1 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
    >
      삭제
    </button>
  );
};

DeleteScheduleButton.defaultProps = {};

export default DeleteScheduleButton;
