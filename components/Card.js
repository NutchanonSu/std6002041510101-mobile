import React, { Component } from 'react';
import { View, Text, Image, Button } from 'react-native';
import CardSection from './CardSection';

class Card extends Component {
    render() {
        return (
            <View>
                <Image
                    style={{width: 100, height: 100}}
                    source={{uri: 'https://goo.gl/QwLk72'}}
                />
                <Text>Meteora</Text>
                <Text>Linkin Park</Text>
                <CardSection>
                <Image
                    style={{width: 320, height: 300}}
                    source={{uri: 'https://goo.gl/1EBWpY'}}
                />
                </CardSection>
                <CardSection>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                    <View style={{ width: 100, backgroundColor: 'red' }}>
                    <Button 
                        title="Buy"
                    />
                    </View>
                    </View>
                </CardSection>
            </View>
        );
    }
}

const style = {
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    }
}

export default Card;