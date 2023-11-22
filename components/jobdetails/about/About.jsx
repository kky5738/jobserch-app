import React from "react"
import { View, Text, Image } from "react-native"

import styles from "./about.style"
import {icons} from "../../../constants"
import {checkImageURL} from "../../../utils"

const About = ({companyLogo, jotTitle, companyName, location}) => {
    return (
        <View>
            <Text>About Component</Text>
        </View>
    )
}

export default About