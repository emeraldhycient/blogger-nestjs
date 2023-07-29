import {
    IsInt,
    Length
} from 'class-validator';
export class CreateCommentDto {
    @Length(1, 255)
    content: string;

    @IsInt()
    postId: string;

    @IsInt()
    authorId: string;
}
