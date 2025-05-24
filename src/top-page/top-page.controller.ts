import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TopPageModel } from './top.page.model';
import { FindTopPageDto } from './dto/find-top-page';

@Controller('top-page')
export class TopPageController {
  
  @Post('create')
  async create(@Body() dto: Omit<TopPageModel, 'id'>) {}

  @Get(':id')
  async get(@Param() id: string) {}

  @Delete(':id')
  async delete(@Param() id: string) {}

  @Patch(':id')
  async patch(@Param() id: string, @Body() dto: TopPageModel) {}

  @HttpCode(200)
  @Post()
  async fund(@Body() dto: FindTopPageDto) {}
}
