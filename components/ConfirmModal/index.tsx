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
      <div className=" bg-white dark:bg-slate-700 rounded-md">
        {children}
        <div className="flex p-2 justify-end gap-3 sticky bottom-0 border-t border-slate-400">
          <button
            onClick={onCancel}
            type="button"
            className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
          >
            {CANCEL_TEXT}
          </button>

          <button
            type="button"
            onClick={onConfirm}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
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
