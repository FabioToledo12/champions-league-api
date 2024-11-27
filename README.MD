### Iniciar o Projeto
 -> npm init

### Instalar o packages basicos para o projeto
 -> npm i typescrypt tsx tsup -D

### Inicializar o tsconfig.json
 -> npx tsc --init

### Coinfig Padrões tsconfig.json
 {
  "compilerOptions": {
    "target": "ES6",
    "module": "CommonJS",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true
  }
}

### Instalar o express
 -> npm i express

### Passo a passo implentação de metodos ( CRUD )
  1 -> Routes - Criar a rota 
    router.delete( "/players/:id", deletePlayer )
  2 -> Controllers - Criar o controller 
    export const deletePlayer = async (req: Request, res: Response) => {
	  throw new Error("Method not implemented.");
    }
  3 -> Services - Criar o service
    export const deletePlayerService = async (id: number) => {
    // biome-ignore lint/style/useConst: <explanation>
    let response = null
        await PlayerRepository.deleteOnePlayer(id)
        response = ok( { message: "deleted success" } ) 
    }
  4 -> Repositories - Criar o repository - Criar primeiro o Repository
    export const deleteOnePlayer = async (id: number) => {
    const index = database.findIndex( (p) => p.id === id );

    if (index !== -1) {
      database.splice(index, 1);
      return true;
    }

    return false;
    };

## Instalado o cors
 -> npm i cors
 -> npm i @types/cors