import Checkbox from '@Components/Util/Checkbox'
import Input from '@Components/Util/Input'
import useFormL from '@Hooks/FormLogin/useFormL';
import Button from '../Util/Button';

const FormLog = () => {
    const { checked, setChecked } = useFormL();

    return (
        <div className='formulario'>
            <div className='item'>
                <Input clases='width_input' placeholder='usuario' type='text' name='usuario'/>
            </div>
            <div className='item'>
                <Input clases='width_input' placeholder='contraseña' type='password' name="password"/>
            </div>
            <div className='container_check'>
                <Checkbox size='15px' checked={checked} setChecked={setChecked} />
                <span>Recordarme</span>
            </div>
            <Button text={"Iniciar"} classButton="white border_social" typeButton='submit'/>
        </div>
    )
}

export default FormLog