import { Component, AfterViewChecked} from '@angular/core';

@Component({
  selector: 'angular-root',
  template: `
  <h4>Angular 2
    <span class="load" (click)="reload()">[load]</span>
    <span id="angular-load-time" class="load-time"></span>
  </h4>
  <div class="row-item angular" *ngFor="let name of names">{{name.label}}</div>
`,
})
export class AppComponent  {

  constructor(){}

  names:any[] = [];
  date:Date;

  reload() {
    //noinspection TypeScriptUnresolvedFunction
    this.names = buildData();
    this.date = new Date();
  }

  ngAfterViewChecked() {
    //noinspection TypeScriptUnresolvedFunction
    if (!isNaN(this.date)) {
      document.getElementById("angular-load-time").innerHTML = (new Date() - this.date + ' ms');
    }
  }
}
