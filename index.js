const fs = require('fs')
const path = require('path')

const { conteudoPackage } = require('./files_base/conteudoPackageJson')
const { conteudoPackageLock } = require('./files_base/conteudoPackage-lock')
const { conteudoApp } = require('./files_base/conteudoAppJs')
const { conteudoDotEnv } = require('./files_base/conteudoDotEnv')
const { conteudoGitIgnore } = require('./files_base/conteudoGitIgnore')
const { conteudoPrettierRc } = require('./files_base/conteudoPrettierRc')
const { conteudoRouterJs } = require('./files_base/conteudoRouterJs')
const { conteudoApiControllerJs } = require('./files_base/conteudoApiControllerJs')
const { conteudoDbConnectJs } = require('./files_base/conteudoDbConnectJs')

const criarProjeto = async (local, nomeProjeto) => {
    if (!local || !nomeProjeto) {
        console.log('informe um local e o nome do projeto')
        return
    } else {
        try {
            if (!fs.existsSync(path.join(local, nomeProjeto))) {
                fs.mkdirSync(path.join(local, nomeProjeto))
                fs.writeFileSync(`${path.join(local, nomeProjeto)}/package.json`, conteudoPackage)
                fs.writeFileSync(`${path.join(local, nomeProjeto)}/package-lock.json`, conteudoPackageLock)
                fs.writeFileSync(`${path.join(local, nomeProjeto)}/app.json`, conteudoApp)
                fs.writeFileSync(`${path.join(local, nomeProjeto)}/.env`, conteudoDotEnv)
                fs.writeFileSync(`${path.join(local, nomeProjeto)}/.gitignore`, conteudoGitIgnore)
                fs.writeFileSync(`${path.join(local, nomeProjeto)}/.prettierrc`, conteudoPrettierRc)
                
                fs.mkdirSync(`${path.join(local, nomeProjeto)}/src`)
                fs.mkdirSync(`${path.join(local, nomeProjeto)}/src/router`)
                fs.writeFileSync(`${path.join(local, nomeProjeto)}/src/router/router.js`, conteudoRouterJs)

                fs.mkdirSync(`${path.join(local, nomeProjeto)}/src/controllers`)
                fs.writeFileSync(`${path.join(local, nomeProjeto)}/src/controllers/apiController.js`, conteudoApiControllerJs)
                
                fs.mkdirSync(`${path.join(local, nomeProjeto)}/src/public`)

                fs.mkdirSync(`${path.join(local, nomeProjeto)}/src/db`)
                fs.writeFileSync(`${path.join(local, nomeProjeto)}/src/db/dbConnect.js`, conteudoDbConnectJs)

                fs.mkdirSync(`${path.join(local, nomeProjeto)}/src/repositories`)

                fs.mkdirSync(`${path.join(local, nomeProjeto)}/src/queries`)

                fs.mkdirSync(`${path.join(local, nomeProjeto)}/src/services`)

                console.log('Projeto criado com sucesso!')
                return
            } else {
                console.log('pasta existente')
                return
            }
        } catch (error) {
            console.log(error)
        }
    }
}

criarProjeto('d:/', 'PrimeiroProjetoNode')


