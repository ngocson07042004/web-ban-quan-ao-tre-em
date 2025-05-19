import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Toast() {
    return (
       <ToastContainer
            position="top-right"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
    )
}

export default Toast