import { removeDirectivesFromDocument } from "@apollo/client/utilities";
import { StyleSheet } from "react-native";

export const styles = theme =>
    StyleSheet.create({
        body: {
            padding: 15,
            flex: 1,
            backgroundColor: theme.colors.BACKGROUND,
            width: '100%',
        },
        list: {
            flex: 1,
            paddingTop: 15,
            paddingBottom: 15,
            backgroundColor: theme.colors.BACKGROUND,
            width: '100%',
            flexDirection: 'row',
            alignContent: 'center',
        },
        text: {
            color: theme.colors.TEXT,
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
        homeScreenCameraButton: {
            width: "100%",
            height: 120,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: theme.colors.TEXT,
            
        },
        name: {
            fontSize: 30,
            color: theme.colors.TEXT,
            fontWeight: 'bold',
        },
        sectionHeader: {
            fontSize: 20,
            color: theme.colors.TEXT,
            textDecorationLine: 'underline',
            marginTop: 20,
        },
        icon: {
            color: theme.colors.TEXT,
        },
        listItem:{
            fontSize: 20,
            color: theme.colors.TEXT,
            alignContent: 'center',
            height: 50,
            textAlignVertical: 'center',
        },
        circle: {
            width: 50,
            height: 50,
            fontSize: 20,
            borderRadius: 50,
            color: 'white',
            textAlignVertical: 'center',
            fontSize: 10,
            backgroundColor: 'tomato',
            textAlign: 'center',
            marginRight: 20,
          },

    });
