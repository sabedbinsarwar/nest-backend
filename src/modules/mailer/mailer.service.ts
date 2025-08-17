import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MailerService as NestMailerService } from '@nestjs-modules/mailer';
import { MailerDto } from './dto/mailer.dto';

@Injectable()
export class MailerService {
    constructor(
        private readonly configService: ConfigService,
        private readonly nestMailer: NestMailerService,
    ) {}

    async sendWelcomeMail(email: string, username: string) {
        const subject = 'Welcome to Art Store';
        const html = `<h3>Welcome, ${username}!</h3><p>Thanks for registering as an artist at Art Store. We are excited to see your creations.</p>`;
        return this.sendEmail({
            recipients: [email],
            subject,
            html,
            text: `Welcome, ${username}! Thanks for registering as an artist at Art Store.`
        } as any);
    }

    async sendEmail(dto:MailerDto){
        const{ recipients, subject, html, text } = dto;
        try {
            await this.nestMailer.sendMail({
                to: recipients,
                subject: subject,
                html: html,
                text: text || '',
            });
            return { message: 'Email sent successfully' };
        } catch (error) {
            console.error('Error sending email:', error);
            throw error;
        }
    }
}
