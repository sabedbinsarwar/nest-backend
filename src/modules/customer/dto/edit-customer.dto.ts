<<<<<<< HEAD
import { IsEmail, IsIn, IsNotEmpty, IsNumberString, IsOptional, IsString, Matches, MinLength } from 'class-validator';
import { Transform } from 'class-transformer';
export class EditCustomerDto {
    id: string;

    username: string;

    email: string;

    fullName: string;

    billingAddress: string;

    shippingAddress: string;

    phone: string;
    
    @IsOptional()
    @Transform(({ value }) => value.toLowerCase())
    @IsIn(['male', 'female'])
    gender: string;

}

=======
import { IsEmail, IsIn, IsNotEmpty, IsNumberString, IsOptional, IsString, Matches, MinLength } from 'class-validator';
import { Transform } from 'class-transformer';
export class EditCustomerDto {
    id: string;

    username: string;

    email: string;

    fullName: string;

    billingAddress: string;

    shippingAddress: string;

    phone: string;
    
    @IsOptional()
    @Transform(({ value }) => value.toLowerCase())
    @IsIn(['male', 'female'])
    gender: string;

}

>>>>>>> 52ebfe7e64a0aa28a39f7f2ba31071b6d8378541
