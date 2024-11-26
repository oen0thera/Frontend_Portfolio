import {
  ActionKey,
  ActionList,
  ActionParam,
  setScroll,
  StoreAction,
} from "@/type/Store/Action/StoreAction";
import { AppState, StateKey } from "@/type/Store/Reducer/StoreReducer";
import { useDispatch } from "react-redux";
export default function useDispatcher() {
  const dispatcher = useDispatch();
  const dispatch = (action: ActionKey, value: AppState[StateKey]) => {
    const selectedAction: (value: any) => StoreAction = ActionList[action];
    dispatcher(selectedAction(value));
  };
  return dispatch;
}
