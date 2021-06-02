import { Controller, Get } from 'routing-controllers';
import {Service} from 'typedi';

@Controller()
@Service()
export class CaseController {
  @Get('/cases')
  getAll() {
    return ['case1', 'case2', 'case3'];
  }
}

