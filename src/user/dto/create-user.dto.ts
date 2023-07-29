import {
    Length,
    IsEmail
} from 'class-validator';

export class CreateUserDto {

    @IsEmail()
    email: string;

    @Length(4, 20)
    name: string;
}
