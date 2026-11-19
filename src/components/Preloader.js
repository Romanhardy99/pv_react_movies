import './Preloader.css'

function Preloader() {

    return (
        <div className="lds-ripple" role="status" aria-label="Загрузка">
            <div></div>
            <div></div>
        </div>
    )
}
export default Preloader;