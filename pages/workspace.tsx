import { ScheduledItem } from "../@types";
import Divider from "../components/Divider";
import WorkSpaceController from "../components/WorkSpaceController";
import WorkSpaceNewSchedule from "../components/WorkSpaceNewSchedule";
import WorkSpaceView from "../components/WorkSpaceView";
import useLayered from "../hooks/useLayeredItems";
import MainTemplate from "../templates/MainTemplate";

export default function WorkSpace() {
  const { origin, view, sync } = useLayered<ScheduledItem[]>([]);

  return (
    <MainTemplate>
      <WorkSpaceNewSchedule />
      <WorkSpaceController
        setOriginItems={origin.set}
        setViewItems={view.set}
      />
      <Divider className="my-3" />
      <WorkSpaceView items={view.item} />
    </MainTemplate>
  );
}
