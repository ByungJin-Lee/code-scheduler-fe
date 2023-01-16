import { useRef, useState } from "react";
import { IEvaluationResult } from "../../@types";
import useCodeTest from "../../hooks/useCodeTest";
import useCreateSchedule from "../../hooks/useCreateSchedule";
import useScheduleData from "../../hooks/useScheduleData";
import wrapOnChange from "../../utils/wrapOnChange";
import ConfirmModal from "../ConfirmModal";
import EvaluationResult from "../EvaluationResult";
import { ModalProps } from "../Modal";
import SchedulePicker from "../SchedulePicker";

type ScheduleModalProps = {} & ModalProps;

const ScheduleModal = ({ ...modalProps }: ScheduleModalProps) => {
  const handleCancel = () => modalProps.close();

  const handleConfirm = () => createMutate(data);

  const [testOutput, setTestOutput] = useState<IEvaluationResult | null>(null);

  const { mutate: testMutate } = useCodeTest(setTestOutput);

  const { mutate: createMutate } = useCreateSchedule(modalProps.close);

  const { data, hlr } = useScheduleData();

  const handleTest = () => testMutate(data.code);

  return (
    <ConfirmModal
      onCancel={handleCancel}
      onConfirm={handleConfirm}
      {...modalProps}
    >
      <div className="p-3 min-w-[330px] max-w-[720px] max-h-96 overflow-y-scroll">
        <label
          htmlFor="name"
          className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
        >
          이름
        </label>
        <input
          value={data.name}
          onChange={wrapOnChange(hlr.setName)}
          type="text"
          id="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="입력..."
          required
        />

        <label
          htmlFor="description"
          className=" mt-2 block mb-1 text-sm font-medium text-gray-900 dark:text-white"
        >
          설명
        </label>
        <textarea
          value={data.description}
          onChange={wrapOnChange(hlr.setDescription)}
          id="description"
          rows={2}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write..."
        ></textarea>

        <label className=" mt-2 block mb-1 text-sm font-medium text-gray-900 dark:text-white">
          시간
        </label>
        <SchedulePicker schedule={data.period} setSchedule={hlr.setPeriod} />
        <label
          htmlFor="code"
          className="mb-1 mt-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          코드
        </label>
        <button
          type="button"
          onClick={handleTest}
          className=" ml-2 mt-2 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-3 py-1 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Test
        </button>
        {testOutput && <EvaluationResult {...testOutput} />}
        <textarea
          value={data.code}
          onChange={wrapOnChange(hlr.setCode)}
          id="code"
          rows={2}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write..."
        ></textarea>
      </div>
    </ConfirmModal>
  );
};

ScheduleModal.defaultProps = {};

export default ScheduleModal;
