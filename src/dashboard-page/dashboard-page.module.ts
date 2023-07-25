import { NgModule } from '@angular/core';
import { NgJsonEditorModule } from 'ang-jsoneditor';
import { DashboardPageComponent } from './dashboard-page.component';
import { SchemasInputComponent } from '../admin/admin-page/test-event/schemas-input/schemas-input.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        DashboardPageComponent,
    ],
    imports: [
        MatAutocompleteModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        CommonModule
    ],
    exports: [
        DashboardPageComponent 
    ]
})
export class DashboardPageModule { }