import { Module, NestModule } from '@nestjs/common';
import { HelloController } from './controllers/hello.controller';
import { ENV_Class_Provider } from './providers/env.provider';

export const ENV_PROVIDER_NAME = 'env';

@Module({
    controllers: [HelloController],
    providers: [
        {
            provide: 'env',
            useValue: process.env.NODE_ENV
        },
        ENV_Class_Provider,
    ],
    imports: [],
})
export class AppModule implements NestModule { 
    configure(){};
};