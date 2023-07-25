import { ObjectTypeComponent } from './types/object.type';
import { ArrayTypeComponent } from './types/array.type';
import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyMaterialModule } from '@ngx-formly/material';

export function typeValidationMessage({ schemaType }: any) {
    return `should be "${schemaType[0]}".`;
}

@NgModule({
    declarations: [
        ObjectTypeComponent,
        ArrayTypeComponent
    ],
    imports: [
        CommonModule,
        FormlyMaterialModule,
        FormlyModule.forRoot({
            validationMessages: [
                { name: 'required', message: 'This field is required' },
                { name: 'type', message: typeValidationMessage }],
            // { name: 'minLength', message: minLengthValidationMessage }],
            types: [{ name: 'object', component: ObjectTypeComponent },
            { name: 'array', component: ArrayTypeComponent }]
        })
    ],
    exports: [ObjectTypeComponent, ArrayTypeComponent],
})
export class SchemaTypesModule { }