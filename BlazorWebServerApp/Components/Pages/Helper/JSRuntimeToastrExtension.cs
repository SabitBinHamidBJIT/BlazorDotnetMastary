using Microsoft.JSInterop;

namespace BlazorWebServerApp.Components.Pages.Helper
{
    public static class JSRuntimeToastrExtension
    {

        public static async ValueTask JSRuntimeToastrSuccess(this IJSRuntime _jSRuntime, string message)
        {
            await _jSRuntime.InvokeVoidAsync("ShowToastrNotification","success",message);
        }

        public static async ValueTask JSRuntimeToastrError(this IJSRuntime _jSRuntime , string message)
        {
            await _jSRuntime.InvokeVoidAsync("ShowToastrNotification", "error", message);
        }

        public static async ValueTask JSRuntimeShowSwelSuccess(this IJSRuntime _jSRuntime, string message)
        {
            await _jSRuntime.InvokeVoidAsync("ShowSwal", "success", message);
        }

        public static async ValueTask JSRuntimeShowSwelError(this IJSRuntime _jSRuntime, string message)
        {
            await _jSRuntime.InvokeVoidAsync("ShowSwal", "error", message);
        }
    }
}
