import { useFormContext } from "react-hook-form";
const options = ["", "one", "two", "three"];
type Props = {
    name: string;
};
function SelectField(props: Props) {
    const methods = useFormContext();
    return (
        <>
            <select {...methods.register(props.name)}>
                {options.map((value) => (
                    <option key={value} value={value}>
                        {value}
                    </option>
                ))}
            </select>

            {methods.formState.errors[props.name] && (
                <p>{methods.formState.errors[props.name]?.message as string}</p>
            )}
        </>
    );
}
export default SelectField;