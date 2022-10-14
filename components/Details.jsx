import React from 'react'
import { useQuery } from '@tanstack/react-query';
import { Text, View, ScrollView, Image, StyleSheet } from 'react-native';
import { getEvents } from '../apis/nantesData';

const Details = () => {
    const { isLoading, data } = useQuery(['events'], getEvents);
    const records = data?.records;

    if (isLoading) return <Text>Loading</Text>
    return (
        <ScrollView>
            <View style={styles.container}>
                {
                    records &&
                    records.map(record =>
                        <View style={styles.wrapper}>
                            <View key={record.recordid + Math.random()}>
                                <Text style={styles.fieldsGap}>{record.fields.date}</Text>
                                <Image source={{ uri: record.fields.media_url }} style={{ width: '100%', aspectRatio: 16 / 9 }}></Image>
                                <Text style={styles.fieldsGap}>{record.fields.description}</Text>
                            </View>
                        </View>
                    )
                }
            </View>
        </ScrollView>
    )
}

export default Details

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    wrapper: {
        paddingLeft: 20,
        paddingRight: 20
    },
    fieldsGap: {
        marginTop: 20,
        marginBottom: 20
    },
});