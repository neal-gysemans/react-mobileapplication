import { StyleSheet } from "react-native";

export const styles = theme =>
    StyleSheet.create({
        body: {
            padding: 15,
            flex: 1,
            backgroundColor: theme.colors.BACKGROUND,
            alignItems: "center",
            position: "relative",
        },
        text: {
            color: theme.colors.TEXT,
        },
        textBG_COLOR: {
            color: theme.colors.BACKGROUND,
        },
        camera: {
            width: "100%",
            height: "100%",
            position: "relative",
        },
        cameraFlipButtonContainer: {
            position: "absolute",
            top: 10,
            right: 10,
        },
        takePictureButtonContainer: {
            position: "absolute",
            bottom: 10,
            left: "50%",
            transform: [{translateX: -25}],
        },
        cameraButton: {
            borderRadius: 50,
            backgroundColor: theme.colors.TEXT,
            width: 50,
            height: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        takePictureButton: {
            borderRadius: 50,
            backgroundColor: theme.colors.TEXT,
            width: 50,
            height: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        cameraButtonText: {
            color: theme.colors.BACKGROUND,
        },
        largeCameraButton: {
            width: "100%",
            height: 120,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: theme.colors.TEXT,
        },
        newPhotoButton: {
            position: "absolute",
            top: 25,
            left: 25,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 50,
            width: 50,
            borderRadius: 50,
            backgroundColor: theme.colors.TEXT
        },
        usePhotoButton: {
            position: "absolute",
            bottom: 25,
            left: 25,
            right: 25,
            height: 60,
            backgroundColor: theme.colors.TEXT,
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
        img: {
            width: "100%",
            height: "100%",
        },
        error: {
          fontSize: 15,
          color: 'darkred',
          fontWeight: 'bold'
        },
        loading: {
          fontSize: 15,
        },
    });
