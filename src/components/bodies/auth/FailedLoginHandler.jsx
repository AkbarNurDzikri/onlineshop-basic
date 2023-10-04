import Swal from "sweetalert2";

const FailedLoginHandler = ({error}) => {
  Swal.fire({
    title: 'Unauthorized',
    text: error,
    icon: 'warning'
  })
}

export default FailedLoginHandler;