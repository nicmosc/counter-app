import React from 'react';
import { SectionList, Text, View, Switch, Dimensions } from 'react-native';
import { Constants } from 'expo';

import styles from '../styles/routes/fonts-viewer';


class FontsViewer extends React.Component {
  render() {
    const fonts = Constants.systemFonts;
    const sectioned = fonts.reduce((groupedFonts, font) => ({
      ...groupedFonts,
      [font[0]]: [
        ...(groupedFonts[font[0]] || []),
        font,
      ],
    }), {});
    const sections = Object.keys(sectioned).map((key) => ({ title: key, data: sectioned[key] }));
    return (
      <View style={styles.container}>
        <SectionList
          sections={sections}
          renderItem={({ item }) => <Text style={[ styles.item, { fontFamily: item }]}>{item + ' 1234567890'}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index} />
      </View>
    );
  }
}


export default FontsViewer;
