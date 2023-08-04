import { CreateFatherDto } from './createFather.dto';

export interface CreateCommentDto extends CreateFatherDto {
  name: string;
  comment: string;
}
