import { User } from "src/Models/user.entity";
import { UserService } from "src/Services/user.service";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getAllUsers(): Promise<User[]>;
}
