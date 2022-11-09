import { NgModule } from "@angular/core";

//iniciar o roteamento
//importar o módulo de roteamento
import { RouterModule, Routes } from "@angular/router";
import { ListarProdutosComponent } from "./pages/listar-produtos/listar-produtos.component";
import { ProdutoComponent } from "./pages/produto/produto.component";

// rota -> componente
/**
 * rotas é responsavel por armazenar as rotas que existem dentro do site.
 * 
 * Cada item do array de rotas é uma nova rota que foi declarada
 */
const rotas: Routes = [
    {  
         //http:localhost:4200
    path: '', // caminho para acessar a rota
    redirectTo: 'produtos' ,
    pathMatch: 'full'  },
{
    //http:localhost:4200/produtos
    path: 'produtos',
    component: ListarProdutosComponent
    },{
        path: 'produtos/:idProduto',
        component: ProdutoComponent
    }  // cada objeto é uma rota

]

@NgModule ({
    declarations: [],
    imports: [
        RouterModule.forRoot(rotas) // módulo que inicia o roteamento  e carrega as rotas que estão dentro do array
    ],
    providers: [],
    exports: [
        RouterModule // exportando o módulo após as rotas terem sido carregadas dentro dele
    ]
})
export class appRoutingModule {}