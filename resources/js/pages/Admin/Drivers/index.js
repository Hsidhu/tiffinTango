import { useHistory } from 'react-router-dom';

const Drivers = () => {
    const history = useHistory()

    const clickHandler = () => {
        history.push('/admin/drivers/edit')
    }

    return (
        <div>
            <h1>List of drivers</h1>
            <button onClick={clickHandler}>Edit</button>
        </div>
    );
}

export default Drivers;
