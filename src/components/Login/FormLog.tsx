import Checkbox from '@Components/Util/Checkbox'
import Input from '@Components/Util/Input'
import useFormL from '@Hooks/FormLogin/useFormL';

const FormLog = () => {
    const { checked, setChecked } = useFormL();

    return (
        <div className='formulario'>
            <div className='item'>
                <Input clases='width_input' />
            </div>
            <div className='item'>
                <Input clases='width_input' />
            </div>
            <div className='container_check'>
                <Checkbox size='15px' checked={checked} setChecked={setChecked} />
                <span>Recordarme</span>
            </div>
        </div>
    )
}

export default FormLog