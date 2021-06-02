import {Service} from "typedi";

@Service()
export class CaseService {
  getAll() {
    return ['case1', 'case2'];
  }
}
