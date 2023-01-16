import { StyleSheet } from "react-native";

export const styles = theme =>
    StyleSheet.create({
        body: {
            flex: 1,
            backgroundColor: theme.colors.BACKGROUND,
            alignItems: 'center',
        },
        text: {
            color: theme.colors.TEXT,
        },
        camera: {
            width: "100%",
            height: "100%",
        },
        cameraButtonContainer: {},
        cameraButton: {},
        cameraButtonText: {},
    });