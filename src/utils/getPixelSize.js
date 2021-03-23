import {Platform, PixelRatio} from 'react-native'

export default function getPixelSize(pixels){
    return Platform.select({
        ios: pixels,
        android: PixelRatio.getPixelSizeForLayoutSize(pixels)
    })
}