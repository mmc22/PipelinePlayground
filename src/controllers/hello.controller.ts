import { Controller, Get, Inject } from '@nestjs/common'
import { ENV_Class_Provider } from '../providers/env.provider';
import { ENV_PROVIDER_NAME } from '../app.module';

@Controller() 
export class HelloController {
   constructor(
       private readonly fhirModule: ENV_Class_Provider,
    //    @Inject('env') private readonly env: any
   ) {} 
    
    @Get('/hello')
    async hello() { 
        await this.fhirModule.fun1();
        // return `This is the ${this.env} environment`
    }
}