/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {FlatList, Text, View} from 'react-native';

export const HorizontalList = ({toRender, title}) => {
  return (
    <View style={{height: 270}}>
      {title && (
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            marginBottom: 10,
            marginLeft: 10,
            color: '#273746',
          }}>
          {title}
        </Text>
      )}
      <FlatList
        data={toRender}
        renderItem={({item}: any) => (
          <View>
            <Text>voy...</Text>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
