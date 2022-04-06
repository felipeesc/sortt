import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sorted';

  ngOnInit() {
    this.removerPessoa(this.pessoa)
  }

  public pessoas = [''];
  public preLista = ['FELIPE', 'KAIQUE', 'KEVIN', 'GIL', 'DIVO', 'FLAVIO', 'EULER', 'PRETO', 'JHON', 'REIS', 'CAPELORE', 'VITOLA', 'DAN', 'VINHAL']
  public pessoa = "";
  public sortear = true;
  public isListar = false;
  public sorteado = false;

  adicionarPessoa() {
    if (!this.pessoas.includes(this.pessoa.toUpperCase())) {
      this.pessoas.push(this.pessoa.toUpperCase().trim());

      if (this.pessoas.length >= 9) {
        this.sortear = false;
      }
      this.pessoa = '';
    }
  }

  removerPessoa(pessoa: string) {
    this.pessoas.splice(this.pessoas.indexOf(pessoa), 1);
    if (this.pessoas.length <= 8) {
      this.sortear = true;
    }


  }

  sortearTime() {
    let corte = 5;
    this.pessoas.sort();
    for (let i = 0; i < this.pessoas.length; i++) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.pessoas[i], this.pessoas[j]] = [this.pessoas[j], this.pessoas[i]];
    }

    this.isListar = false;
     let reduce = this.pessoas.reduce((acumulador, item, indice) => {
      const grupo = Math.floor(indice / corte);
      // @ts-ignore
      acumulador[grupo] = [...(acumulador[grupo] || []), item];
      this.sorteado = true;
      return acumulador;
    }, []);

    this.pessoas.push.apply(reduce)
  }

  listarNomes() {
    this.pessoas = [];
    this.pessoas.push.apply(this.pessoas, this.preLista);
    if (this.pessoas.length >= 9) {
      this.sortear = false;
    }
    this.isListar = true;
  }

}
