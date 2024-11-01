import Swal from "sweetalert2";

const SweetAlert = (title,icon,text,showConfirmButton = true) =>{
    return Swal.fire({
        icon: icon,
        title: title,
        text : text,
        showConfirmButton : showConfirmButton,
        timer : 1500
      });
}

export default SweetAlert