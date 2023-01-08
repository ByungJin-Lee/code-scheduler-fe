import { ReactNode } from "react";
import { useLanguagePack } from "../../contexts/LanguageContext";
import Modal, { ModalProps } from "../Modal";

export type ConfirmModalProps = {
  onConfirm(): void;
  onCancel(): void;
} & ModalProps;

const ConfirmModal = ({
  onCancel,
  onConfirm,
  children,
  ...modalProps
}: ConfirmModalProps) => {
  const { CONFIRM_TEXT, CANCEL_TEXT } = useLanguagePack();

  return (
    <Modal {...modalProps}>
      <div className=" bg-slate-50 dark:bg-slate-700 rounded-md">
        {children}
        <div className="flex p-2 justify-end gap-3 sticky bottom-0 border-t border-slate-400">
          <button
            className="rounded-sm px-2 py-1 bg-red-200 dark:bg-red-300"
            onClick={onCancel}
          >
            {CANCEL_TEXT}
          </button>
          <button
            className="bg-blue-300 dark:bg-blue-500 rounded-sm px-2 py-1"
            onClick={onConfirm}
          >
            {CONFIRM_TEXT}
          </button>
        </div>
      </div>
    </Modal>
  );
};

ConfirmModal.defaultProps = {};

export default ConfirmModal;
