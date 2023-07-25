import { FormlyModule, FormlyFieldConfig } from '@ngx-formly/core';

export function typeValidationMessage({ schemaType }: any) {
    return `should be "${schemaType[0]}".`;
}
export function minItemsValidationMessage(error: any, field: FormlyFieldConfig) {
    return field.props ?  `should NOT have fewer than ${field.props['minItems']} items`: '';
}

export function maxItemsValidationMessage(error: any, field: FormlyFieldConfig) {
    return field.props ?  `should NOT have more than ${field.props['maxItems']} items`: '';
}

export function minLengthValidationMessage(error: any, field: FormlyFieldConfig) {
    return field.props ? `should NOT be shorter than ${field.props['minLength']} characters` : '';
}


export function maxLengthValidationMessage(error: any, field: FormlyFieldConfig) {
    return field.props ? `should NOT be longer than ${field.props.maxLength} characters`: '';
}