import { Body, Controller, Get, Post } from '@nestjs/common';
import { BoardService } from './board.service';
import { CreateBoardDto } from 'src/_common/dtos/createBoard.dto';
import { CreateUserDto } from 'src/_common/dtos/createUser.dto';
import { CreateCommentDto } from 'src/_common/dtos/createComment.dto';
import { CreateItemDto } from 'src/_common/dtos/createItem.dto';
import { CreateFatherDto } from 'src/_common/dtos/createFather.dto';
import { ReturnMessageDto } from 'src/_common/dtos/returnMessage.dto';

@Controller('board')
export class BoardController {
  constructor(private boardService: BoardService) {}

  @Get()
  getBoard(): string {
    return this.boardService.getBoard();
  }

  @Post()
  createBoard(@Body() createBoardData: CreateBoardDto): CreateBoardDto {
    return this.boardService.createBoard(createBoardData);
  }

  @Post()
  createUser(@Body() createUserData: CreateUserDto): CreateUserDto {
    return this.boardService.createUser(createUserData);
  }

  @Post()
  createComment(@Body() createCommentData: CreateCommentDto): CreateCommentDto {
    return this.boardService.createComment(createCommentData);
  }

  @Post()
  createItem(@Body() createItemData: CreateItemDto): CreateItemDto {
    return this.boardService.createItem(createItemData);
  }

  @Post()
  createFather(@Body() createFatherData: CreateFatherDto): ReturnMessageDto {
    return this.boardService.createFather(createFatherData);
  }
}
