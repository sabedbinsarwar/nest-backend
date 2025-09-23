<<<<<<< HEAD
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Art } from './entities/art.entity';
import { ArtService } from './art.service';
import { ArtController } from './art.controller';
import { Artist } from 'src/artist/entities/artist.entity';
import { JwtModule } from '@nestjs/jwt';
import { ArtistModule } from 'src/artist/artist.module';

@Module({
  imports: [TypeOrmModule.forFeature([Art, Artist]), JwtModule, ArtistModule],
  controllers: [ArtController],
  providers: [ArtService],
  exports: [ArtService],
})
=======
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Art } from './entities/art.entity';
import { ArtService } from './art.service';
import { ArtController } from './art.controller';
import { Artist } from 'src/artist/entities/artist.entity';
import { JwtModule } from '@nestjs/jwt';
import { ArtistModule } from 'src/artist/artist.module';

@Module({
  imports: [TypeOrmModule.forFeature([Art, Artist]), JwtModule, ArtistModule],
  controllers: [ArtController],
  providers: [ArtService],
  exports: [ArtService],
})
>>>>>>> 52ebfe7e64a0aa28a39f7f2ba31071b6d8378541
export class ArtModule {}