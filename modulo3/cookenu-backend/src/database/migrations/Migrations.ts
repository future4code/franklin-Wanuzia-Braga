import { BaseDatabase } from "../BaseDatabase"
import { RecipeDataBase } from "../RecipeDatabase"
import { UserDatabase } from "../UserDatabase"
import { recipes, users, followers } from "./data"

class Migrations extends BaseDatabase {
    execute = async () => {
        try {
            console.log("Creating tables...")
            await this.createTables()
            console.log("Tables created successfully.")

            console.log("Populating tables with users...")
            await this.insertUsers()
            console.log("Populating tables with recipes...")
            await this.insertRecipes()
            console.log("Populatinf followers...")
            await this.insertFollowers()
            console.log("Tables populated successfully.")

            console.log("Migrations completed.")
        } catch (error: any) {
            console.log("Error in migrations...")
            console.log(error.message)
        } finally {
            console.log("Ending connection...")
            BaseDatabase.connection.destroy()
            console.log("Connection closed graciously.")
        }
    }

    createTables = async () => {
        await BaseDatabase.connection.raw(`
        DROP TABLE IF EXISTS ${RecipeDataBase.TABLE_RECIPES};
        DROP TABLE IF EXISTS ${UserDatabase.TABLE_FOLLOWERS};
        DROP TABLE IF EXISTS ${UserDatabase.TABLE_USERS};

        CREATE TABLE IF NOT EXISTS ${UserDatabase.TABLE_USERS}(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            role ENUM("NORMAL", "ADMIN") DEFAULT "NORMAL" NOT NULL
        );

        CREATE TABLE IF NOT EXISTS ${RecipeDataBase.TABLE_RECIPES}(
            id VARCHAR(255) PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            description VARCHAR(255) NOT NULL,
            createdAt DATE NOT NULL,
            user_id VARCHAR(255) NOT NULL,
            user_name VARCHAR(255) NOT NULL,
            FOREIGN KEY (user_id) REFERENCES ${UserDatabase.TABLE_USERS}(id)
        );
        CREATE TABLE IF NOT EXISTS ${UserDatabase.TABLE_FOLLOWERS} (
            id_followed VARCHAR(255),
            id_follower VARCHAR(255),
            PRIMARY KEY(id_followed, id_follower),
            FOREIGN KEY (id_followed) REFERENCES ${UserDatabase.TABLE_USERS}(id),
            FOREIGN KEY (id_follower) REFERENCES ${UserDatabase.TABLE_USERS}(id)
        )
        `)
    }

    insertUsers = async () => {
        await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .insert(users)
    }

    insertRecipes = async () => {
        await BaseDatabase
        .connection(RecipeDataBase.TABLE_RECIPES)
        .insert(recipes)
    }

    insertFollowers = async () => {
        await BaseDatabase
        .connection(UserDatabase.TABLE_FOLLOWERS)
        .insert(followers)
    }
}

const migrations = new Migrations()
migrations.execute()