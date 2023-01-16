import { useEffect } from "react";
import { ScheduledItem } from "../@types";
import Divider from "../components/Divider";
import WorkSpaceController from "../components/WorkSpaceController";
import WorkSpaceView from "../components/WorkSpaceView";
import useGetMySchedule from "../hooks/useGetMySchedule";
import useLayered from "../hooks/useLayeredItems";
import MainTemplate from "../templates/MainTemplate";

export default function WorkSpace() {
  const { origin, view, sync } = useLayered<ScheduledItem[]>([]);

  const { data } = useGetMySchedule(() => {});

  return (
    <MainTemplate>
      <WorkSpaceController
        setOriginItems={origin.set}
        setViewItems={view.set}
      />
      <Divider className="my-3" />
      <WorkSpaceView items={data?.data} />
    </MainTemplate>
  );
}
