import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SandSimpleSelect';
  dropdowndata = [
    {
      name:'one'
    },
    {
      name:'two'
    }
  ]
  disabled= false;
  selectLabel="Choose one"
  noDataText="No data found"

  onSelect(event){
    console.log(event)
  }
  open(event){
    console.log('open?',event)
  }
  close(event) {
    console.log('close?',event)
  }
}
