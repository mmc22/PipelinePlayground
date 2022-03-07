import { NestFactory } from '@nestjs/core';
import { AppModule } from './src/app.module';

// this is server - variable called app is server
const bootstrap = async () => { 
    const app = await NestFactory.create(AppModule); // configures and sets up 
    app.listen(8080) // listens to traffic (http requests)
}

bootstrap() //call bootstrap
