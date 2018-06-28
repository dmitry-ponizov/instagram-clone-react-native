import React from 'react';
import { ActivityIndicator, Image, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import AuthorRow from './AuthorRow';


export default class Card extends React.Component {
  
static propTypes = {
  fullname: PropTypes.string.isRequired,
  image: Image.propTypes.source.isRequired,
  linkText: PropTypes.string,
  onPressLinkText: PropTypes.func
}

  state = {
    loading: true
  }

  handleLoad = () => {
    this.setState({
      loading: false
    });
  }
  

  static defaultProps = {
    linkText: '',
    onPressLinkText: () => {}
  }

  render() {
    const { fullname, image, linkText, onPressLinkText } = this.props;
    const { loading } = this.state;
    return (
      <View>
        <AuthorRow
          fullname={fullname}
          linkText={linkText}
          onPressLinkText={onPressLinkText} />
         {loading && (
           <ActivityIndicator
              style={StyleSheet.absoluteFill}
              size={'large'}
             / >
         )}
         <Image source={image} style={styles.image} onLoad={this.handleLoad} />
       </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    aspectRatio: 1,
    backgroundColor: 'rgba(0,0,0,0.02)'
  }
});
