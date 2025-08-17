import { Module } from '@nestjs/common';
import { MailerService } from './mailer.service';
import { MailerController } from './mailer.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MailerModule as NestMailerModule } from '@nestjs-modules/mailer';

@Module({
   imports: [
     ConfigModule,
     NestMailerModule.forRootAsync({
       imports: [ConfigModule],
       useFactory: async (config: ConfigService) => ({
         transport: {
           host: config.get<string>('EMAIL_HOST'),
           port: config.get<number>('EMAIL_PORT'),
           secure: false,
           auth: {
             user: config.get<string>('EMAIL_USER'),
             pass: config.get<string>('EMAIL_PASSWORD'),
           },
         },
         defaults: {
           from: config.get<string>('EMAIL_USER'),
         },
       }),
       inject: [ConfigService],
     }),
   ],
  controllers: [MailerController],
  providers: [MailerService],
  exports: [MailerService],
})
export class MailerModule {}
