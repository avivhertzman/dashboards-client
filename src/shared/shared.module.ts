import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyModule } from '@ngx-formly/core';



@NgModule({
    declarations: [
    ],
    imports: [
        MatAutocompleteModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        CommonModule,
        MatButtonModule,
        MatDialogModule,
    ],
    exports: [
        MatAutocompleteModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        CommonModule,
        MatDialogModule,
        MatButtonModule,
        MatDialogModule, 
        MatSlideToggleModule,
        FormlyMaterialModule,
        FormlyModule
    ],
    providers: [

    ]
})
export class SharedModule { }