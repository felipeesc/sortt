import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {
  @Input() players: string[] | undefined;
  public pesso = "";

  public timesSelecionados: any[] | undefined;
  public timeFinal: Observable<any> | undefined;

  constructor(private changeDetection: ChangeDetectorRef) {

  }

  ngOnInit(): void {
    this.chunk();
    const timeFinal = new BehaviorSubject(this.timesSelecionados);
  }

  chunk() {
    // @ts-ignore
    const length = this.players.length;
    const output = new Array(Math.ceil(length / 5));
    let seekIndex = 0, outputIndex = 0;
    while (seekIndex < length) {
      // @ts-ignore
      output[outputIndex++] = this.players.slice(seekIndex, seekIndex += 5);

    }
    this.timesSelecionados = output;
    return output;
  }

  adicionar() {
    // @ts-ignore
    if (!this.players.includes(this.pesso.toUpperCase())) {
      // @ts-ignore
      let tamanho = this.players.length;
      // @ts-ignore
      var last = this.timesSelecionados.length -1
      // @ts-ignore
      // console.log(this.players[tamanho].push(this.pesso.toUpperCase().trim()));
      // @ts-ignore
      var ultimoTime = this.timesSelecionados[this.timesSelecionados.length -1];

      if (ultimoTime.length < 5) {
        // @ts-ignore
        ultimoTime.push(this.pesso.toUpperCase().trim());

        // @ts-ignore
        // this.timesSelecionados[last] = ultimoTime;
        this.timesSelecionados[last] = [...ultimoTime]

      } else {
        // @ts-ignore
        this.timesSelecionados.push([this.pesso.toUpperCase().trim()])
      }
      // @ts-ignore
      this.pesso = '';
    }
  }

  perdedor(timePerdedor: string | number) {

    // @ts-ignore
    let arrayTimePerdedor = [...this.timesSelecionados[timePerdedor]];

    // @ts-ignore
    let ultimoTime = [...this.timesSelecionados[this.timesSelecionados.length -1]];


    while (ultimoTime.length < 5) {
      let completandoUltimoTime = arrayTimePerdedor.splice(arrayTimePerdedor.length - 1, 1);
      // @ts-ignore
      ultimoTime.push(completandoUltimoTime[0]);
    }
    // @ts-ignore
    this.timesSelecionados[this.timesSelecionados.length - 1] = ultimoTime
    // @ts-ignore
    this.timesSelecionados[timePerdedor] = arrayTimePerdedor;
    // @ts-ignore
    let timePerdedorParaRetirar = this.timesSelecionados?.splice(timePerdedor, 1);
    // @ts-ignore
    this.timesSelecionados.push(timePerdedorParaRetirar[0]);

  }


}
