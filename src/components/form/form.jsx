import { useState } from 'react';
import './form.css';

const Form = ({ agregarSuperheroe }) => {
    const [form, setForm] = useState({
        nombre: "",
        apellido: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    
    const [mensajeExito, setMensajeExito] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    // validación de errores
    const getErrors = () => {
        const errors = {};
        // longitud del nombre
        if (form.nombre && form.nombre.length < 4) errors.nombre = '¿Qué superhéroe que se aprecie tiene un nombre tan corto? Thor y Hulk tienen al menos 4 letras.';
        // longitud del apellido
        if (form.apellido && form.apellido.length < 4) errors.apellido = 'Ningun superhéroe valiente tiene un apellido tan corto! Debe tener al menos 4 letras.';
        // longitud del email y uso del @
        if (form.email.length > 0 && form.email.length < 10) {
            errors.email = 'El correo es muy corto. Debe tener al menos 10 caracteres.';
        } 
        else if (form.email.length >= 10 && !form.email.includes('@')) {
            errors.email = 'El correo debe incluir un "@" digno de un superhéroe para ser válido.';
        }
        // longitud del password
        if (form.password.length < 12) errors.password = 'La contraseña debe tener 12 caracteres ultra secretos.';
        // coincidencia de passwords
        if (form.confirmPassword !== form.password) errors.confirmPassword = 'Todo superheroe hace coincidir sus contraseñas.';
        return errors;
    };

    const errors = getErrors();

    const isFormValid = Object.keys(errors).length === 0 && 
                        form.nombre !== "" && 
                        form.apellido !== "" && 
                        form.email !== "" && 
                        form.password !== "";

    const handleSubmit = (e) => {
        e.preventDefault();

        const nuevoHeroe = {
        id: Date.now(),
        nombre: form.nombre,
        apellido: form.apellido,
        email: form.email,
        password: form.password
        };

    // Enviar el objeto al componente padre
        agregarSuperheroe(nuevoHeroe); 
    
        setMensajeExito(`¡Superhéroe registrado! ${form.nombre} ${form.apellido} se ha unido a la liga.`);
        setForm({ nombre: "", apellido: "", email: "", password: "", confirmPassword: "" });
        setTimeout(() => setMensajeExito(''), 3000);
};

    return (
        <>
            {mensajeExito && <div className="success-toast">{mensajeExito}</div>}
            <form className="hero-form" onSubmit={handleSubmit}>
                <div className="field">
                    <label>Nombre:</label>
                    <input name="nombre" type = "text" value={form.nombre} onChange={handleChange} placeholder="Ej: Peter" />
                    {errors.nombre && <span className="error">{errors.nombre}</span>}
                </div>
                <div className="field">
                    <label>Apellido:</label>
                    <input name="apellido" type = "text" value={form.apellido} onChange={handleChange} placeholder="Ej: Parker"/>
                    {errors.apellido && <span className="error">{errors.apellido}</span>}
                </div>
                <div className="field">
                    <label>Correo Electronico:</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Ej: superheroe@ligadejusticia.com" />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div className="field">
                    <label>Contraseña</label>
                    <input name="password" type = "password" value={form.password} onChange={handleChange} />
                    {errors.password && <span className="error">{errors.password}</span>}
                </div>
                <div className="field">
                    <label>Confirmar Contraseña:</label>
                    <input name="confirmPassword" type = "password" value={form.confirmPassword} onChange={handleChange} />
                    {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
                </div>
                <button type="submit" className="submit-btn" disabled={!isFormValid}>Crear Superhéroe</button>
            </form>
        </>
    );
};

export default Form;
