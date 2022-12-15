import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TodoModule } from './todos/todo.module';

@Module({
  imports: [
    AuthModule,
    TodoModule
  ],
  providers: [],

})

export class ModuleV1 { }
