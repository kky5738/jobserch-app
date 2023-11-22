import React from "react"
import { View, Text, Image } from "react-native"

import styles from "./footer.style"
import {icons} from "../../../constants"
import {checkImageURL} from "../../../utils"

const Footer = ({companyLogo, jotTitle, companyName, location}) => {
    return (
        <View>
            <Text>Footer Component</Text>
        </View>
    )
}

export default Footer