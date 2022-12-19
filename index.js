import fs from "fs";
import path from "path";
import inquirer from "inquirer";

import { conteudoPackageJson } from "./files_base/conteudoPackageJson.js";
import { conteudoPackageLock } from "./files_base/conteudoPackage-lock.js";
import { conteudoApp } from "./files_base/conteudoAppJs.js";
import { conteudoDotEnv } from "./files_base/conteudoDotEnv.js";
import { conteudoGitIgnore } from "./files_base/conteudoGitIgnore.js";
import { conteudoPrettierRc } from "./files_base/conteudoPrettierRc.js";
import { conteudoRouterJs } from "./files_base/conteudoRouterJs.js";
import { conteudoApiControllerJs } from "./files_base/conteudoApiControllerJs.js";
import { conteudoDbConnectJs } from "./files_base/conteudoDbConnectJs.js";

const criarEstruturaProjeto = async (local, nomeProjeto) => {
    if (!local || !nomeProjeto) {
        console.log("Informe um local e o nome do projeto");
        return;
    } else {
        try {
            if (!fs.existsSync(path.join(local, nomeProjeto))) {
                fs.mkdirSync(path.join(local, nomeProjeto));
                fs.writeFileSync(
                    `${path.join(local, nomeProjeto)}/package.json`,
                    conteudoPackageJson
                );
                fs.writeFileSync(
                    `${path.join(local, nomeProjeto)}/package-lock.json`,
                    conteudoPackageLock
                );
                fs.writeFileSync(
                    `${path.join(local, nomeProjeto)}/app.js`,
                    conteudoApp
                );
                fs.writeFileSync(
                    `${path.join(local, nomeProjeto)}/.env`,
                    conteudoDotEnv
                );
                fs.writeFileSync(
                    `${path.join(local, nomeProjeto)}/.gitignore`,
                    conteudoGitIgnore
                );
                fs.writeFileSync(
                    `${path.join(local, nomeProjeto)}/.prettierrc`,
                    conteudoPrettierRc
                );

                fs.mkdirSync(`${path.join(local, nomeProjeto)}/src`);
                fs.mkdirSync(`${path.join(local, nomeProjeto)}/src/router`);
                fs.writeFileSync(
                    `${path.join(local, nomeProjeto)}/src/router/router.js`,
                    conteudoRouterJs
                );

                fs.mkdirSync(
                    `${path.join(local, nomeProjeto)}/src/controllers`
                );
                fs.writeFileSync(
                    `${path.join(
                        local,
                        nomeProjeto
                    )}/src/controllers/apiController.js`,
                    conteudoApiControllerJs
                );

                fs.mkdirSync(`${path.join(local, nomeProjeto)}/src/public`);

                fs.mkdirSync(`${path.join(local, nomeProjeto)}/src/db`);
                fs.writeFileSync(
                    `${path.join(local, nomeProjeto)}/src/db/dbConnect.js`,
                    conteudoDbConnectJs
                );

                fs.mkdirSync(
                    `${path.join(local, nomeProjeto)}/src/repositories`
                );

                fs.mkdirSync(`${path.join(local, nomeProjeto)}/src/queries`);

                fs.mkdirSync(`${path.join(local, nomeProjeto)}/src/services`);

                console.log("Projeto criado com sucesso!");
                return;
            } else {
                console.log("pasta existente");
                return;
            }
        } catch (error) {
            console.log(error);
        }
    }
};

const operations = () => {
    inquirer
        .prompt([
            {
                type: "list",
                name: "action",
                message: "Deseja criar um projeto Node?",
                choices: ["Sim", "Não"],
            },
        ])
        .then((opcao) => {
            const action = opcao["action"];
            if (action === "Sim") {
                criarProjeto();
            } else {
                console.log("App finalizado com sucesso!");
                process.exit();
            }
        });
};

const criarProjeto = () => {
    inquirer
        .prompt([
            {
                type: "list",
                name: "local",
                message: "Selecione o disco",
                choices: ["c:/", "d:/"],
            },
        ])
        .then((result) => {
            const local = result["local"];
            inquirer
                .prompt([
                    {
                        name: "nomePasta",
                        message: "Informe o nome da pasta do projeto: ",
                    },
                ])
                .then((pasta) => {
                    const pastaNome = pasta["nomePasta"];
                    criarEstruturaProjeto(local, pastaNome);
                    process.exit();
                });
        });
};

operations();
