import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/_common/dtos/createUser.dto';
import { CreateBoardDto } from 'src/_common/dtos/createBoard.dto';
import { CreateCommentDto } from 'src/_common/dtos/createComment.dto';
import { CreateItemDto } from 'src/_common/dtos/createItem.dto';
import { CreateFatherDto } from 'src/_common/dtos/createFather.dto';
import { ReturnMessageDto } from 'src/_common/dtos/returnMessage.dto';

@Injectable()
export class BoardService {
  getBoard(): string {
    return '게시판 입니다.';
  }

  createBoard(createBoardData: CreateBoardDto): CreateBoardDto {
    return createBoardData;
  }

  createUser(createUserData: CreateUserDto): CreateUserDto {
    return createUserData;
  }

  createComment(createCommentData: CreateCommentDto): CreateCommentDto {
    return createCommentData;
  }

  createItem(createItemData: CreateItemDto): CreateItemDto {
    return createItemData;
  }

  createFather(createFatherData: CreateFatherDto): ReturnMessageDto {
    return { message: '하이용' };
  }
}
