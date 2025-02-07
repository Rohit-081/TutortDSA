import { IsArray, IsDateString, IsNotEmpty, IsString } from 'class-validator';
export class CreateSongDTO {

    @IsString()
    @IsNotEmpty()
    readonly title : string;

    @IsNotEmpty()
    @IsArray()s
    @IsString()
    readonly artists : string[];

    @IsNotEmpty()
    @IsDateString()
    readonly releasedDate : Date;
    
    readonly duration : Date;

}