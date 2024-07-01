import { Module } from '@nestjs/common';
import { SongsController } from './songs.controller';
import { SongsService } from './songs.service';
import { title } from 'process';

const mockSongsService = {
  findAll() {
    return [{ id:1, title: 'Lasting lover' }];
  },
};

@Module({
  controllers: [SongsController],
  providers: [
    //SongsService
    // {
    //   provide: SongsService,
    //   useClass: SongsService,
    // },
    {
      provide: SongsService,
      useValue: mockSongsService,
    },
  ],
})
export class SongsModule {}
