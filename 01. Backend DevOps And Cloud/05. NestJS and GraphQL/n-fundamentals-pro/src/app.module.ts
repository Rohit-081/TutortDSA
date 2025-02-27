import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsController } from './songs/songs.controller';
import { SongsModule } from './songs/songs.module';
import { LoggerMiddleware } from './common/middleware/logger/logger.middleware';

@Module({
  imports: [SongsModule],
  controllers: [AppController, SongsController],
  providers: [AppService],
})
export class AppModule implements NestModule  {
  configure(consumer: MiddlewareConsumer) {
  //  consumer.apply(LoggerMiddleware).forRoutes('songs') // option 1
  //  consumer.apply(LoggerMiddleware).forRoutes({path: 'songs', method: RequestMethod.POST}); // option 2

  consumer.apply(LoggerMiddleware)
  .forRoutes(SongsController); // option 3

  }
}
