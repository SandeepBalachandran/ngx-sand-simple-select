import { NgModule } from '@angular/core';
import { SandSimpleSelectComponent } from './sand-simple-select/sand-simple-select.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [SandSimpleSelectComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule

  ],
  exports: [SandSimpleSelectComponent]
})
export class SandSimpleSelectModule { }
