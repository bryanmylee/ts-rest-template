import { Application } from 'express';
import { createExpressServer } from 'routing-controllers';
import { CaseController } from './case/CaseController';
import { env } from './env';

export const configServer = (): Application => {
  const app: Application = createExpressServer({
    controllers: [CaseController],
  });

  app.listen(env.port, () => {
    console.log(`Server listening on ${env.port}`);
  });

  return app;
};
