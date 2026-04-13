import SubmitButton from "../../../components/Button/SubmitButton"
import FloatingLabelInput from "../../../components/input/FloatingLabelInput"

const AddGender = () => {
    return (
        <>
            <div className="mb-4">
                <FloatingLabelInput label="Gender" type="text" name="gender" />

            </div>
            <div className="flex justify-end">
                <SubmitButton label="Save Gender" />
            </div>

        </>
    )
}

export default AddGender