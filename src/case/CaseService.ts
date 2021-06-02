import { Service } from 'typedi';

@Service()
export class CaseService {
  getAll(): string[] {
    return ['case1', 'case2'];
  }
}
