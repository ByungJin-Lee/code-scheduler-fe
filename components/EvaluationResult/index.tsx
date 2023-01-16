import { Accordion } from "flowbite-react";
import { IEvaluationResult } from "../../@types";
import memoryCalcHelper from "../../utils/memoryCalcHelper";

type EvaluationResultProps = {} & IEvaluationResult;

const EvaluationResult = ({ ...info }: EvaluationResultProps) => {
  return (
    <div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ExitCode
              </th>
              <th scope="col" className="px-6 py-3">
                Running<span className="text-gray-400">(ms)</span>
              </th>
              <th scope="col" className="px-6 py-3">
                Cpu-Usage
              </th>
              <th scope="col" className="px-6 py-3">
                Memory-Usage<span className="text-gray-400">(MB)</span>
              </th>
              <th scope="col" className="px-6 py-3">
                At<span className="text-gray-400">(utc)</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {info.exitCode}
                {info.exitCode !== 0 && (
                  <span className="text-red-500">(error)</span>
                )}
              </th>
              <td className="px-6 py-4">{info.runningTime}</td>
              <td className="px-6 py-4">{info.cpuUsage}</td>
              <td className="px-6 py-4">
                {memoryCalcHelper(info.memoryUsage)}
              </td>
              <td className="px-6 py-4">{info.executedAt}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className=" mt-2 mb-2">
        <Accordion>
          <Accordion.Panel>
            <Accordion.Title className="bg-gray-50 dark:bg-gray-700">
              STDOUT
            </Accordion.Title>
            <Accordion.Content>
              <>
                {info.stdout.map((out, i) => (
                  <p key={i}>{out}</p>
                ))}
              </>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className=" bg-red-200 dark:bg-gray-700">
              STDERR
            </Accordion.Title>
            <Accordion.Content>
              <>
                {info.stderr.map((out, i) => (
                  <p className=" whitespace-pre-wrap" key={i}>
                    {out}
                  </p>
                ))}
              </>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
    </div>
  );
};

export default EvaluationResult;
