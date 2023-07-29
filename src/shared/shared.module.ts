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
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSnackBar, MatSnackBarRef, MatSnackBarModule} from '@angular/material/snack-bar';




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
        MatToolbarModule,
        MatIconModule,
        MatSnackBarModule
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
        FormlyModule,
        MatToolbarModule,
        MatIconModule,
        MatSnackBarModule
    ],
    providers: [

    ]
})
export class SharedModule { }