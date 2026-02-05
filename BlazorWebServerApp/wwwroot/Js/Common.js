
window.ShowToastrNotification = (type, message) => {
    if (type === "success") {
        
        toastr.success(message, 'Operation successfull!', { timeOut: 5000 })
    }
    if (type === "error") {
        // Display an error toast, with a title
        toastr.error(message, 'Operation Failed!', { timeOut: 5000 })
    }
}