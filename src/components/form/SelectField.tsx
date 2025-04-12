import { useFormContext } from "react-hook-form";
import { Select } from "../ui/Select";
const options = ["", "one", "two", "three"];
type Props = {
    name: string;
};
function SelectField(props: Props) {
    const methods = useFormContext();
    return (
        <>
            <Select {...methods.register(props.name)}>
                {options.map((value) => (
                    <option key={value} value={value}>
                        {value}
                    </option>
                ))}
            </Select>

            {methods.formState.errors[props.name] && (
                <p>{methods.formState.errors[props.name]?.message as string}</p>
            )}
        </>
    );
}
export default SelectField;