import { createContext, ReactNode, useState } from "react";
import { IUser } from "../interfaces/IUser";

interface IUserContext {
    user: IUser;
    updateUser: (user: IUser) => void;
}

export const UserContext = createContext<IUserContext>({
    user: {} as IUser,
    updateUser: () => {},
});

export default function UserProvider({ children }: { children: ReactNode }) {
    
    const [user, setUser] = useState<IUser >(() => {
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : null;
    });

    const updateUser = (user: IUser ) => {
        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
        } else {
            localStorage.removeItem("user");
        }
        setUser(user);
    };

    return (
        <UserContext.Provider value={{ user, updateUser }}>
            {children}
        </UserContext.Provider>
    );
}
