import { ListTeamAPLInfo } from "@/type/apiTypes";
import { apiHelper } from "./api";
import { logError } from "@/utils/log-helper";
interface VoteTeamListDataRespon {
  currVote: number;
  list: ListTeamAPLInfo[];
  total: number;
}
export interface VoteTeamMetadata {
  code: number;
  mess: string;
  data: VoteTeamListDataRespon;
}
export const serverGetTeamAPLList = async () => {
  let res = {} as VoteTeamMetadata;
  try {
    const result = await apiHelper("/Event", "team-apl-get-list", "");
    if (result.process_status > 0) {
      res = await result.res;
    }
  } catch (error) {
    logError("serverGetTeamAPLList", { error });
  }
  return res;
};
