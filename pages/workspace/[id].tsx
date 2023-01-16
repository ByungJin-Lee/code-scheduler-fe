import { useRouter } from "next/router";
import { useState } from "react";
import { IEvaluationResult } from "../../@types";
import ChangeActiveButton from "../../components/ChangeActiveButton";
import DeleteScheduleButton from "../../components/DeleteScheduleButton";
import Divider from "../../components/Divider";
import EvaluationResult from "../../components/EvaluationResult";
import useCodeTest from "../../hooks/useCodeTest";
import useGetEvaluation from "../../hooks/useGetEvaluation";
import useGetSchedule from "../../hooks/useGetSchedule";
import MainTemplate from "../../templates/MainTemplate";
import wrapOnChange from "../../utils/wrapOnChange";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  const [code, setCode] = useState("");

  const { data: sch } = useGetSchedule(Number(id), (data) => {
    setCode(data.code);
  });

  const { data: ev } = useGetEvaluation(Number(id));

  const [testOutput, setTestOutput] = useState<IEvaluationResult | null>(null);

  const { mutate: testMutate } = useCodeTest(setTestOutput);

  const handleTest = () => testMutate(code);

  if (!sch || !ev) return <MainTemplate>Loading...</MainTemplate>;

  return (
    <MainTemplate>
      <div className="my-2 content">
        <p>Schedule Name - {sch.data.name}</p>
        <p>
          Status -
          <ChangeActiveButton id={sch.data.id} active={sch.data.active} />
        </p>
        <DeleteScheduleButton id={sch.data.id} />
      </div>
      <Divider />

      <div className="content">
        <button
          type="button"
          onClick={handleTest}
          className=" ml-2 mt-2 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-3 py-1 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Test
        </button>
        <textarea
          value={code}
          onChange={wrapOnChange(setCode)}
          id="code"
          rows={2}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write..."
        ></textarea>
        {testOutput && <EvaluationResult {...testOutput} />}
      </div>

      <Divider />
      {Array.isArray(ev.data) &&
        ev.data.map((e: any) => <EvaluationResult key={e.id} {...e} />)}

      <Divider />
    </MainTemplate>
  );
};

export default Post;
