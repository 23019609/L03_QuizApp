import React, {useState} from 'react';
import {StatusBar} from 'expo-status-bar';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Alert,
    TouchableOpacity,
    ToastAndroid,
    Image,
    ScrollView
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {useFonts, ArbutusSlab_400Regular} from "@expo-google-fonts/arbutus-slab";

const questionImg = {
    Bee: require('./assets/img/bee.jpg'),
    Kingfisher: require('./assets/img/kingfisher.jpg'),
    Deer: require('./assets/img/deer.jpg'),
};

const Question = ({imgName, imgHeight, option1, option2, option3, correctAnswer, setAnswer }) => {
    return (
        <View>
            <Image source={imgName} style={{width: 371, height: imgHeight, alignSelf: 'center'}}/>

            <Text style={{color: 'grey'}}>What animal is this?</Text>
            <RNPickerSelect
                onValueChange={(value) => {
                    setAnswer(value, correctAnswer);
                }}
                items={[
                    {label: `${option1}`, value: `${option1}`},
                    {label: `${option2}`, value: `${option2}`},
                    {label: `${option3}`, value: `${option3}`},
                ]}
            />
        </View>
    )
}

const MyApp = () => {
    const [answer, setAnswer] = useState('');
    useFonts({ArbutusSlab_400Regular});
    const checkAnswer = (answer, correctAnswer) => {
        if (answer === correctAnswer) {
            console.log("Correct answer");
        }
    }

    return (
        <View style={{padding: 30, paddingTop: 50, paddingBottom: 50}}>
            <ScrollView style={{marginBottom: 30}}>
                {/*Header*/}
                <Text>{'\n'}</Text>
                <Text style={{
                    alignSelf: "center",
                    color: "blue",
                    fontSize: 30,
                    fontFamily: "ArbutusSlab_400Regular",
                    paddingBottom: 20
                }}>Quiz</Text>

                {/*Question 1*/}
                <Question imgName={questionImg["Bee"]} imgHeight={278} option1="Bee" option2="Moth" option3="Fly" correctAnswer="Bee" />

                {/*<Image source={require('./assets/img/bee.jpg')} alt={"bee"}*/}
                {/*       style={{width: 371, height: 278, alignSelf: 'center'}}/>*/}

                {/*<Text style={{color: 'grey'}}>What animal is this?</Text>*/}
                {/*<RNPickerSelect*/}
                {/*    onValueChange={(value) => {*/}
                {/*        setAnswer(value)*/}
                {/*    }}*/}
                {/*    items={[*/}
                {/*        {label: 'Bee', value: 'Bee'},*/}
                {/*        {label: 'Moth', value: 'Moth'},*/}
                {/*        {label: 'Fly', value: 'Fly'},*/}
                {/*    ]}*/}
                {/*/>*/}


                {/*Question 2*/}
                <Text>{'\n'}</Text>
                <Question imgName={questionImg["Kingfisher"]} imgHeight={247} option1="Hummingbird" option2="Kingfisher" option3="Eastern Bluebird" correctAnswer="Kingfisher" />

                {/*<Text>{'\n'}</Text>*/}
                {/*<Image source={require('./assets/img/kingfisher.jpg')} alt={"kingfisher"}*/}
                {/*       style={{width: 371, height: 247, alignSelf: 'center'}}/>*/}

                {/*<Text style={{color: 'grey'}}>What animal is this?</Text>*/}
                {/*<RNPickerSelect*/}
                {/*    onValueChange={(value) => {*/}
                {/*        setAnswer(value)*/}
                {/*    }}*/}
                {/*    items={[*/}
                {/*        {label: 'Hummingbird', value: 'Hummingbird'},*/}
                {/*        {label: 'Kingfisher', value: 'Kingfisher'},*/}
                {/*        {label: 'Eastern Bluebird', value: 'Eastern Bluebird'},*/}
                {/*    ]}*/}
                {/*/>*/}

                {/*Question 3*/}
                <Text>{'\n'}</Text>
                <Question imgName={questionImg["Deer"]} imgHeight={297} option1="Deer" option2="Chinkara" option3="Blackbuck" correctAnswer="Deer" />

                {/*<Text>{'\n'}</Text>*/}
                {/*<Image source={require('./assets/img/deer.jpg')} alt={"deer"}*/}
                {/*       style={{width: 371, height: 297, alignSelf: 'center'}}/>*/}

                {/*<Text style={{color: 'grey'}}>What animal is this?</Text>*/}
                {/*<RNPickerSelect*/}
                {/*    onValueChange={(value) => {*/}
                {/*        setAnswer(value)*/}
                {/*    }}*/}
                {/*    items={[*/}
                {/*        {label: 'Deer', value: 'deer'},*/}
                {/*        {label: 'Chinkara', value: 'chinkara'},*/}
                {/*        {label: 'Blackbuck', value: 'blackbuck'},*/}
                {/*    ]}*/}
                {/*/>*/}
            </ScrollView>

            <Button title="SUBMIT" onPress={() => {
                const correctAnswer1 = 'bee';
                let resultmsg = 'Good Try! 0/3';
            }}/>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default MyApp;
