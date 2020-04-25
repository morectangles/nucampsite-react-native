import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { Card } from 'react-native-elements';

class Contact extends Component {

    static navigationOptions = {
        title: 'Contact Us'
    }

    render() {
        return(
            <ScrollView>
                <Card title="Contact Information" wrapperStyle={{margin: 20}}>
                    <Text>
                        {`1 Nucamp Way \nSeattle, WA 98001 \nU.S.A.\n\nPhone: 1-206-555-1234\nEmail: campsites@nucamp.co`}
                    </Text>
                </Card>
            </ScrollView>
        )
    }

}

export default Contact;