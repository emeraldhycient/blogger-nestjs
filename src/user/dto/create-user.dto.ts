import {
    IsInt,
    Length,
    IsEmail,
    IsDate,
    Min,
    Max,
} from 'class-validator';

export class CreateUserDto {

    @IsEmail()
    email: string;
     
    @Min(3) 
    @Max(20)
    name: string;
}
