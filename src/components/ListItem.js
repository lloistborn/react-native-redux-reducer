import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
  render() {
    const { props } = this;

    return (
      <TouchableWithoutFeedback
        onPress={() => props.selectLibrary(props.library.id)}
      >
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>
              {props.library.title}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
};

export default connect(null, actions)(ListItem);
