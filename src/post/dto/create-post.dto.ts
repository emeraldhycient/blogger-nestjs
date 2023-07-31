import {
    IsInt,
    Length,
    Min
} from 'class-validator';


export class CreatePostDto {
    @Length(5, 100)
    title: string;

    @Length(1, 255)
    content: string;

    @Length(1, 255)
    slug: string;

    @IsInt()
    @Min(5)
    authorId: number;

    @IsInt()
    @Min(5)
    categoryId: number;
}
