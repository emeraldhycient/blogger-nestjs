import {
    Length
} from 'class-validator';
export class CreateCategoryDto {
    @Length(4, 20)
    title: string;
}
