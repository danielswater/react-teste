import React, { useState } from 'react';
import { Avatar, Button, Card, Text, List } from 'react-native-paper';
import { View } from 'react-native';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

export default function ConteudoCard() {
    const [expanded, setExpanded] = useState(true);

    const handlePress = () => setExpanded(!expanded);

    return (
        <Card style={{ marginBottom: 20 }}>
            <Card.Title title="Mini Berço Moisés Menino Menina Com Colchão E Mosquiteiro" subtitle="Berços e Moises" />
            {/* <Card.Content>

            </Card.Content> */}
            <Card.Cover style={{ padding: 10, backgroundColor: 'transparent' }} source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Content>
                <List.Section>
                    <List.Accordion
                        title="Descrição"
                        left={props => <List.Icon {...props} icon="folder" />}
                    >
                        <View style={{ paddingLeft: 0 }}>
                            <Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis purus justo, a viverra lacus maximus eu. Quisque venenatis elit nisi, sed molestie felis sollicitudin vel. Maecenas sed tincidunt tortor, eget tincidunt ipsum. Phasellus a nisi convallis, aliquam dui at, blandit arcu. Curabitur vitae dui at mi vestibulum gravida eget at metus. Sed libero nulla, posuere consectetur finibus sed, auctor in sapien. Morbi a ornare dui, vel aliquam turpis. Etiam auctor elit lacus, sit amet vulputate urna lacinia sed. Aliquam et tempus erat. Nullam fermentum porttitor mattis. Aenean congue tellus neque, a congue libero tincidunt maximus.
                            </Text>
                        </View>
                    </List.Accordion>
                </List.Section>
            </Card.Content>
        </Card>
    );
}
