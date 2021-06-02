import { Controller, Get } from 'routing-controllers';
import { Inject, Service } from 'typedi';
import { CaseService } from './CaseService';

@Controller()
@Service()
export class CaseController {
  @Inject()
  private caseService: CaseService;

  @Get('/cases')
  getAll(): string[] {
    return this.caseService.getAll();
  }
}
