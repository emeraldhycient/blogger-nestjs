import {
    validate,
    validateOrReject,
    Contains,
    IsInt,
    Length,
    IsEmail,
    IsFQDN,
    IsDate,
    Min,
    Max,
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
