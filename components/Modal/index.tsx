import { ReactNode } from "react";

type ModalProps = {
  opened: boolean;
  close(): void;
  children: ReactNode;
  className?: string;
  animation: boolean;
  duration: number;
};

const Modal = ({
  opened,
  close,
  children,
  className,
  animation,
  duration,
}: ModalProps) => {
  if (!close) throw Error("Need 'close' function to use Modal.");

  return (
    <div
      className={`${
        !opened ? "opacity-0 pointer-events-none" : "opacity-100"
      } absolute top-0 left-0 flex justify-center items-center w-full h-full ${className} ${
        animation ? `will-change-auto` : ""
      }`}
      style={{ transitionDuration: `${duration}ms` }}
      onClick={close}
    >
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  );
};

Modal.defaultProps = {
  children: "",
  className: "",
  animation: false,
  duration: 300,
};

export default Modal;
