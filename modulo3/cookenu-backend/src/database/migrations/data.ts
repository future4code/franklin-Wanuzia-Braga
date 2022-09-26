import { IRecipeDB } from "../../models/Receitas";
import { IUserDB, USER_ROLES } from "../../models/User"

export const users: IUserDB[] = [
    {
        id: "bb9b7ee8-ae4b-4bd1-9bd6-e7e21594399b",
        name: "Astrodev",
        email: "astrodev@gmail.com",
        password: "$2a$12$RBAWOHpUvGTE.MEeIohAzec9tlVqtNA/x2PMPt/Hrt0vI437cQdJC", // bananinha
        role: USER_ROLES.ADMIN
    },
    {
        id: "f03017bb-2c08-4cdc-bb63-7fbd7cebe01f",
        name: "Fulano",
        email: "fulano@gmail.com",
        password: "$2a$12$PULtVNlAll87D6E8pR/0HO9vbzVDPaUMA89rc5cNmYoAAepbwmkcO", // qwerty00
        role: USER_ROLES.NORMAL
    },
    {
        id: "7079b8e4-95cd-48aa-82a9-77454e94b789",
        name: "Ciclana",
        email: "ciclana@gmail.com",
        password: "$2a$12$LkWMqS3oPhP2iVMcZOVvWer9ahUPulxjB0EA4TWPxWaRuEEfYGu/i", // asdfg123
        role: USER_ROLES.NORMAL
    }
];

export const recipes: IRecipeDB[] = [
    {
        id: "dshgdjksadkls-dsadsadsadsa-dsadsdsd",
        title: "Torta vegana",
        description: "Torta de abobrinha mais gostosa do mundo, com recheio de tofu.",
        createdAt: new Date(),
        user_id: "bb9b7ee8-ae4b-4bd1-9bd6-e7e21594399b",
        user_name: "Astrodev",
    },
    {
        id: "ddsdsds-dsfgfhfgdf-dasdsfdrf",
        title: "Risoto de quinoa",
        description: "Deixe a quinoa de molho por pelo menos duas horas, depois refogue com seus legumes e temperos preferidos. Cozinhe em fogo baixo.",
        createdAt: new Date(),
        user_id: "f03017bb-2c08-4cdc-bb63-7fbd7cebe01f",
        user_name: "Fulano",
    },
    {
        id: "ddsdsds-jhjukgftggjkklok-dasdsfdrf",
        title: "Churrasco vegetariano",
        description: "Faça espetinhos com seja graúda, pimentão, abacaxi, beringela, cenoura e tudo que vocÊ quiser. Tempere a gosto.",
        createdAt: new Date(),
        user_id: "7079b8e4-95cd-48aa-82a9-77454e94b789",
        user_name: "Ciclana",
    }
];
export const followers = [
    {
        id_followed: "7079b8e4-95cd-48aa-82a9-77454e94b789",
        id_follower: "f03017bb-2c08-4cdc-bb63-7fbd7cebe01f",
 
    },
    {
        id_followed: "bb9b7ee8-ae4b-4bd1-9bd6-e7e21594399b",
        id_follower: "7079b8e4-95cd-48aa-82a9-77454e94b789",
 
    }
];
