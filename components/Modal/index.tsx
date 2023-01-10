import { ReactNode } from "react";

export type ModalProps = {
  opened: boolean;
  close(): void;
  children?: ReactNode;
  className?: string;
  animation?: boolean;
  duration?: number;
  ignoreAnywhereClick?: boolean;
};

const ignoreClick = () => {};

const Modal = ({
  opened,
  close,
  children,
  className = "",
  animation = false,
  duration = 0,
  ignoreAnywhereClick = false,
}: ModalProps) => {
  if (!close) throw Error("Need 'close' function to use Modal.");

  return (
    <div
      className={`fixed top-0 left-0 flex justify-center items-center w-full h-full bg-black bg-opacity-20 ${className} ${
        !opened ? "opacity-0 pointer-events-none" : "opacity-100"
      } ${animation ? `will-change-auto` : ""}`}
      style={{ transitionDuration: `${duration}ms` }}
      onClick={ignoreAnywhereClick ? ignoreClick : close}
    >
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  );
};

export default Modal;
