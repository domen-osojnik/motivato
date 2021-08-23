import { User } from "src/Models/user.entity";
export declare class UserService {
    private readonly userRepo;
    getAllUsers(): Promise<User[]>;
}
