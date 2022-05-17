import { promises as fs } from "fs";

//function to check if the file|dir exists
export default async (path: string): Promise<boolean> => {
    try {
        await fs.access(path);
        return true;
    } catch {
        return false;
    }
};
