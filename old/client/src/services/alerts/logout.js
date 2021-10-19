import Swal from "sweetalert2";

export default () =>
  Swal.fire({
    title: "¿Seguro quieres cerrar sesión?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
  });
