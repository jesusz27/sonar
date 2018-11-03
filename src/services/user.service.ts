export class UserService {
    constructor() {
    }
    async uploadAvatar(req: any): Promise<string> {
        const file = req.files.avatar,
            name = file.name,
            type = file.mimetype;
        const uploadpath = "uploads/" + name;
        let uploaded = "uploads/" + name;
        console.log("ruta" + uploadpath);
        file.mv(uploadpath, function (err: any) {
            if (err) {
                uploaded = undefined;
            }
        });
        return uploaded;
    }
}