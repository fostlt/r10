import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';


const Schedule = ({navigation}) => (
    
        <View>
        <Text> Schedule Screen</Text>
        <TouchableOpacity onPress={()=> navigation.navigate('Session')}>
        <Text> Go to Session</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={()=> navigation.navigate('Speaker')}>
                <Text>Go to Speaker Modal</Text>
        </TouchableOpacity>
        
        </View>
    
);


export default Schedule;