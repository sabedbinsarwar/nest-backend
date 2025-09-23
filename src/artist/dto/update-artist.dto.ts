<<<<<<< HEAD
import { PartialType } from '@nestjs/mapped-types';
import { CreateArtistDto } from './create-artist.dto';
import { IsOptional, Matches, MinLength } from 'class-validator';

export class UpdateArtistDto extends PartialType(CreateArtistDto) {
  @IsOptional()
  @MinLength(6)
  @Matches(/\S*[A-Z]\S*/g, { message: 'password must contain one uppercase letter' })
  password?: string;

  @IsOptional()
  username?: string;

  @IsOptional()
  email?: string;

  @IsOptional()
  bio?: string;
=======
import { PartialType } from '@nestjs/mapped-types';
import { CreateArtistDto } from './create-artist.dto';
import { IsOptional, Matches, MinLength } from 'class-validator';

export class UpdateArtistDto extends PartialType(CreateArtistDto) {
  @IsOptional()
  @MinLength(6)
  @Matches(/\S*[A-Z]\S*/g, { message: 'password must contain one uppercase letter' })
  password?: string;

  @IsOptional()
  username?: string;

  @IsOptional()
  email?: string;

  @IsOptional()
  bio?: string;
>>>>>>> 52ebfe7e64a0aa28a39f7f2ba31071b6d8378541
}