type Usuarios = {
    UsuariosID: number;
    Email: string;
    FullName: string;
    NIF: string;
};

export type LoginToken = {
    Validation: boolean;
    Token: string;
    Usuario: Usuarios;
}