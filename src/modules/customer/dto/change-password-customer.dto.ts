<<<<<<< HEAD
import { IsString, Matches, MinLength } from "class-validator";

export class ChangePasswordCustomer{
    @IsString()
    password: string;
    
    @MinLength(6)
    @Matches(/\S*[A-Z]\S*/g, {
        message: 'password must contain one uppercase letter'
    })
    newPassword: string;
}
=======
import { IsString, Matches, MinLength } from "class-validator";

export class ChangePasswordCustomer{
    @IsString()
    password: string;
    
    @MinLength(6)
    @Matches(/\S*[A-Z]\S*/g, {
        message: 'password must contain one uppercase letter'
    })
    newPassword: string;
}
>>>>>>> 52ebfe7e64a0aa28a39f7f2ba31071b6d8378541
