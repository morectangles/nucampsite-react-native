import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { Card } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

class Contact extends Component {

    static navigationOptions = {
        title: 'Contact Us'
    }

    render() {
        return(
            <ScrollView>
                <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
                    <Card title="Contact Information" wrapperStyle={{margin: 20}}>
                        <Text>
                            {`1 Nucamp Way \nSeattle, WA 98001 \nU.S.A.\n\nPhone: 1-206-555-1234\nEmail: campsites@nucamp.co`}
                        </Text>
                    </Card>
                </Animatable.View>
            </ScrollView>
        )
    }

}

export default Contact;