import { User } from "src/Models/user.entity";
import { Repository } from "typeorm";
export declare class UserService {
    private userRepo;
    constructor(userRepo: Repository<User>);
    getAllUsers(): Promise<User[]>;
}
