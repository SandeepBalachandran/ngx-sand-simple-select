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
    },
    {
      name:'third entry'
    },
    {
      name:'fourth entry'
    },
    {
      name:'fifth entry'
    },
    {
      name:'sixth entry'
    }
  ]
  disabled= false;
  selectLabel="Choose one"
  noDataText="No data found"

  onSelect(event){
    console.log(event)
  }
  onSearch(event) {
    console.log(event)
  }
  open(event){
    console.log('open?',event)
  }
  close(event) {
    console.log('close?',event)
  }
}
