import { NestFactory } from '@nestjs/core';
import { AppModule } from './src/app.module';
import * as dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {
    try {
        const application = await NestFactory.createApplicationContext(AppModule);
        // Add migration code here
        await application.close();
        process.exit(0);
    } catch (error) {
        console.log(error)
    }
}

bootstrap();
