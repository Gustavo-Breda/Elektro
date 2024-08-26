import Toast from "react-native-toast-message";


export const ToastError = (error: string, screen: string) => {
    Toast.show({
        type: 'error',
        text1: `⛔\u00A0\u00A0Erro no ${screen}`,
        text2: error
    });
}