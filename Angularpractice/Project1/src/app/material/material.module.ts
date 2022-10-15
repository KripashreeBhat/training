import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

const materialComponent=[
  MatCheckboxModule,
  MatRadioModule,
  // MatFormFieldModule,
  // MatIconModule
  MatButtonModule
]

@NgModule({
  imports: [materialComponent],
  exports:[materialComponent]
})
export class MaterialModule { }
