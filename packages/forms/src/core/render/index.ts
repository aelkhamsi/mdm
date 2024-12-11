import { FieldType } from '@/types/FieldConfig';
import { FormInput } from '@/core/render/FormInput';
import { FormDob } from '@/core/render/FormDob';
import { FormPhoneInput } from '@/core/render/FormPhoneInput';
import { FormTextarea } from '@/core/render/FormTextarea';
import { FormSelect } from '@/core/render/FormSelect';

const getFieldRenderFn = (type: FieldType) => {
  switch(type) {
    case FieldType.TEXT_INPUT:
      return FormInput;
    case FieldType.PHONE_INPUT:
      return FormPhoneInput;
    case FieldType.DATE_OF_BIRTH:
      return FormDob;
    case FieldType.TEXTAREA:
      return FormTextarea;
    case FieldType.SELECT:
      return FormSelect;
    
    default:
      return () => {}
  }
}

export {
  FormInput,
  FormDob,
  FormPhoneInput,
  FormTextarea,
  FormSelect,
  getFieldRenderFn,
}

