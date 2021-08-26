import { Injectable } from '@angular/core';
import { Produto } from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  produtos: Produto[] = [
    new Produto(1, 'Ryzen 5 5600X', 1719.90, ['ryzen5.jpg'], this.getDescricao()),
    new Produto(2, 'Console Microsoft Xbox Series S, 512GB, Branco', 2659.90, ['xbox.jpg'], this.getDescricao()),
    new Produto(3, 'Notebook Acer Aspire 5 Intel Core I5-10210U', 3299.90, ['acer.jpg'], this.getDescricao()),
    new Produto(4, 'SSD XPG S41 TUF 1TB, M.2 PCIE', 989.90, ['SSD.jpg'], this.getDescricao())
  ];

  constructor() { }

  listarTodos(): Produto[]{
    return this.produtos;
  }

  listarId(id: number): Produto | undefined{
    return this.produtos.find(produto => produto.id == id);
  }

  private getDescricao(): string[]{
    return[
      

      'ESPECIFICAÇÕES',
 'CPU:',

'- Núcleos de CPU: 6',

'- Threads: 12',

'- Clock básico: 3.7GHz',

'- Clock de Max Boost: Até 4.6GHz',

'- Cachê L2 total: 3MB',

'- Cachê L3 total: 32MB',

'- Desbloqueado',

'- CMOS: TSMC 7nm FinFET',

'- Soquete: AM4',

'- Versão do PCI Express PCIe 4.0',

'- Solução térmica (PIB): Wraith Stealth',

'- TDP / TDP Padrão: 65W',

' Memória:',

'- Velocidade máxima: 3200MHz',

'- Tipo: DDR4',

'Tecnologias compatíveis:',

'- Tecnologia AMD StoreMI',

'- Utilitário AMD Ryzen Master',

'- AMD Ryzen VR-Ready Premium',

'Conteúdo da Embalagem:',
'- Processador AMD',
'- Refrigeração Wraith Stealth',

'Garantia:',
'12 meses de garantia',
'Peso:',
'410 gramas (bruto com embalagem)',

    ]
  }

}
