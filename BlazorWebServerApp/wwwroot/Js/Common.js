
window.ShowToastrNotification = (type, message) => {
    if (type === "success") {
        
        toastr.success(message, 'Operation successfull!', { timeOut: 3000 })
    }
    if (type === "error") {
        // Display an error toast, with a title
        toastr.error(message, 'Operation Failed!', { timeOut: 3000 })
    }
}

window.ShowSwal = (type, message) => {
    if (type === "success") {

        //toastr.success(message, 'Operation successfull!', { timeOut: 3000 })
        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: message,
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            background: 'linear-gradient(135deg, #22c55e, #16a34a)',
            color: '#ffffff',
            iconColor: '#ffffff',
            customClass: {
                popup: 'swal2-toast-beauty'
            },
            showClass: {
                popup: 'animate__animated animate__fadeInRight'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutRight'
            }
        });

    }
    if (type === "error") {
        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'error',
            title: message,
            showConfirmButton: false,
            timer: 2500,
            timerProgressBar: true,
            background: 'linear-gradient(135deg, #ef4444, #b91c1c)',
            color: '#ffffff',
            iconColor: '#ffffff',
            customClass: {
                popup: 'swal2-toast-error-beauty'
            },
            showClass: {
                popup: 'animate__animated animate__shakeX'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutRight'
            }
        });

    }
}