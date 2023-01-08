import ConfirmModal from "../ConfirmModal";
import { ModalProps } from "../Modal";

type ScheduleModalProps = {} & ModalProps;

const ScheduleModal = ({ ...modalProps }: ScheduleModalProps) => {
  const handleCancel = () => {};

  const handleConfirm = () => {};

  return (
    <ConfirmModal
      onCancel={handleCancel}
      onConfirm={handleConfirm}
      {...modalProps}
    ></ConfirmModal>
  );
};

ScheduleModal.defaultProps = {};

export default ScheduleModal;
