import { Input } from "../ui/input";
import { Label } from "../ui/label";

type FormInputType = {
  name: string;
  type: string;
  label?: string;
  defaultValue?: string;
  placeholder: string;
};

function FormInput(props: FormInputType) {
  const { name, type, label, defaultValue, placeholder } = props;
  return (
    <div className="mb-2">
      <Label htmlFor={label || name} className="capitalize">
        {label} -
      </Label>
      <Input
        type={type}
        name={name}
        id={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required
      />
    </div>
  );
}
export default FormInput;
