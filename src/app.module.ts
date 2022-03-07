import { Module, NestModule } from '@nestjs/common';
import { HelloController } from './controllers/hello.controller';

@Module({
    controllers: [HelloController],
    providers: [],
    imports: [],
})
export class AppModule implements NestModule { 
    configure(){};
};