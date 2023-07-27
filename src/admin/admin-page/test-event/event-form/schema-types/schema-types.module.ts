import { ObjectTypeComponent } from './types/object.type';
import { ArrayTypeComponent } from './types/array.type';
import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { typeValidationMessage, minItemsValidationMessage, maxItemsValidationMessage, minLengthValidationMessage, maxLengthValidationMessage } from "./validators/validators.service";
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
    declarations: [
        ObjectTypeComponent,
        ArrayTypeComponent
    ],
    imports: [
        SharedModule,
        FormlyModule.forRoot({
            validationMessages: [
                { name: 'required', message: 'This field is required' },
                { name: 'type', message: typeValidationMessage },
                { name: 'minItems', message: minItemsValidationMessage },
                { name: 'maxItems', message: maxItemsValidationMessage },
                { name: 'minLength', message: minLengthValidationMessage },
                { name: 'maxLength', message: maxLengthValidationMessage }],
            types: [{ name: 'object', component: ObjectTypeComponent },
            { name: 'array', component: ArrayTypeComponent }]
        })
    ],
    exports: [ObjectTypeComponent, ArrayTypeComponent],
})
export class SchemaTypesModule { }