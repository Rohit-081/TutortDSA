import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service'
import { CreateSongDTO } from './dto/create-songs-dto';
@Controller('songs')
export class SongsController {
    constructor(private songsService: SongsService){}

    @Get()
    findAll(){
        return this.songsService.findAll();
    }

    @Post()
    create(@Body() CreateSongDTO){
        return this.songsService.create(CreateSongDTO)
    }
        
    @Get(':id')
    findOne(){
        return 'fetch song on the based on id'
    }

    @Put(':id')
    update(){
        return 'update song on the based on id';
    }

    @Delete(':id')
    delete(){
        return 'update song on the based id';
    }



}

