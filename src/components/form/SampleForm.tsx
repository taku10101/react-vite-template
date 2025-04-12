import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "./InputField";
import SelectField from "./SelectField";
import { Button } from "../ui/Button/Button";
import { z } from "zod";
const sampleFormSchema = z.object({
    input: z.string().min(1),
    select: z.string().min(1),
});

const SampleForm = () => {
    const methods = useForm({
        resolver: zodResolver(sampleFormSchema),
    });
    const { handleSubmit } = methods;
    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit((data) => console.log(data))}>
                <InputField name='input' />
                <SelectField name='select' />
                <Button type='submit'>Submit</Button>
            </form>
        </FormProvider>
    );
}
export default SampleForm;