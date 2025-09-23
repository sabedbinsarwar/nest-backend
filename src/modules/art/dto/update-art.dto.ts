<<<<<<< HEAD
import { PartialType } from '@nestjs/mapped-types';
import { CreateArtDto } from './create-art.dto';

=======
import { PartialType } from '@nestjs/mapped-types';
import { CreateArtDto } from './create-art.dto';

>>>>>>> 52ebfe7e64a0aa28a39f7f2ba31071b6d8378541
export class UpdateArtDto extends PartialType(CreateArtDto) {}