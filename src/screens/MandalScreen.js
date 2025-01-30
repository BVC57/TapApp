import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Modal,
  Button,
} from 'react-native';
import * as Speech from 'expo-speech';

const images = [
  { title: 'Guruji1', uri: require('../../assets/SantImage/image1.jpg') },
  { title: 'Guruji2', uri: require('../../assets/SantImage/image2.jpg') },
  { title: 'Guruji3', uri: require('../../assets/SantImage/image3.jpg') },
  { title: 'Guruji4', uri: require('../../assets/SantImage/image4.jpg') },
  { title: 'Guruji5', uri: require('../../assets/SantImage/image5.jpg') },
  { title: 'Guruji6', uri: require('../../assets/SantImage/image1.jpg') },
  { title: 'Guruji7', uri: require('../../assets/SantImage/image2.jpg') },
  { title: 'Guruji8', uri: require('../../assets/SantImage/image3.jpg') },
  { title: 'Guruji9', uri: require('../../assets/SantImage/image4.jpg') },
  { title: 'Guruji10', uri: require('../../assets/SantImage/image5.jpg') },
  { title: 'Guruji1', uri: require('../../assets/SantImage/image1.jpg') },
  { title: 'Guruji2', uri: require('../../assets/SantImage/image2.jpg') },
  { title: 'Guruji3', uri: require('../../assets/SantImage/image3.jpg') },
  { title: 'Guruji4', uri: require('../../assets/SantImage/image4.jpg') },
  { title: 'Guruji5', uri: require('../../assets/SantImage/image5.jpg') },
  { title: 'Guruji6', uri: require('../../assets/SantImage/image1.jpg') },
  { title: 'Guruji7', uri: require('../../assets/SantImage/image2.jpg') },
  { title: 'Guruji8', uri: require('../../assets/SantImage/image3.jpg') },
  { title: 'Guruji9', uri: require('../../assets/SantImage/image4.jpg') },
  { title: 'Guruji10', uri: require('../../assets/SantImage/image5.jpg') },
  { title: 'Guruji1', uri: require('../../assets/SantImage/image1.jpg') },
  { title: 'Guruji2', uri: require('../../assets/SantImage/image2.jpg') },
  { title: 'Guruji3', uri: require('../../assets/SantImage/image3.jpg') },
  { title: 'Guruji4', uri: require('../../assets/SantImage/image4.jpg') },
  { title: 'Guruji5', uri: require('../../assets/SantImage/image5.jpg') },
  { title: 'Guruji6', uri: require('../../assets/SantImage/image1.jpg') },
  { title: 'Guruji7', uri: require('../../assets/SantImage/image2.jpg') },
  { title: 'Guruji8', uri: require('../../assets/SantImage/image3.jpg') },
  { title: 'Guruji9', uri: require('../../assets/SantImage/image4.jpg') },
  { title: 'Guruji10', uri: require('../../assets/SantImage/image5.jpg') },
  { title: 'Guruji1', uri: require('../../assets/SantImage/image1.jpg') },
  { title: 'Guruji2', uri: require('../../assets/SantImage/image2.jpg') },
  { title: 'Guruji3', uri: require('../../assets/SantImage/image3.jpg') },
  { title: 'Guruji4', uri: require('../../assets/SantImage/image4.jpg') },
  { title: 'Guruji5', uri: require('../../assets/SantImage/image5.jpg') },
  { title: 'Guruji6', uri: require('../../assets/SantImage/image1.jpg') },
  { title: 'Guruji7', uri: require('../../assets/SantImage/image2.jpg') },
  { title: 'Guruji8', uri: require('../../assets/SantImage/image3.jpg') },
  { title: 'Guruji9', uri: require('../../assets/SantImage/image4.jpg') },
  { title: 'Guruji10', uri: require('../../assets/SantImage/image5.jpg') },
  { title: 'Guruji1', uri: require('../../assets/SantImage/image1.jpg') },
  { title: 'Guruji2', uri: require('../../assets/SantImage/image2.jpg') },
  { title: 'Guruji3', uri: require('../../assets/SantImage/image3.jpg') },
  { title: 'Guruji4', uri: require('../../assets/SantImage/image4.jpg') },
  { title: 'Guruji5', uri: require('../../assets/SantImage/image5.jpg') },
  { title: 'Guruji6', uri: require('../../assets/SantImage/image1.jpg') },
  { title: 'Guruji7', uri: require('../../assets/SantImage/image2.jpg') },
  { title: 'Guruji8', uri: require('../../assets/SantImage/image3.jpg') },
  { title: 'Guruji9', uri: require('../../assets/SantImage/image4.jpg') },
  { title: 'Guruji10', uri: require('../../assets/SantImage/image5.jpg') },
  { title: 'Guruji1', uri: require('../../assets/SantImage/image1.jpg') },
  { title: 'Guruji2', uri: require('../../assets/SantImage/image2.jpg') },
  { title: 'Guruji3', uri: require('../../assets/SantImage/image3.jpg') },
  { title: 'Guruji4', uri: require('../../assets/SantImage/image4.jpg') },
  { title: 'Guruji5', uri: require('../../assets/SantImage/image5.jpg') },
  { title: 'Guruji6', uri: require('../../assets/SantImage/image1.jpg') },
  { title: 'Guruji7', uri: require('../../assets/SantImage/image2.jpg') },
  { title: 'Guruji8', uri: require('../../assets/SantImage/image3.jpg') },
  { title: 'Guruji9', uri: require('../../assets/SantImage/image4.jpg') },
  { title: 'Guruji10', uri: require('../../assets/SantImage/image5.jpg') },
  { title: 'Guruji1', uri: require('../../assets/SantImage/image1.jpg') },
  { title: 'Guruji2', uri: require('../../assets/SantImage/image2.jpg') },
  { title: 'Guruji3', uri: require('../../assets/SantImage/image3.jpg') },
  { title: 'Guruji4', uri: require('../../assets/SantImage/image4.jpg') },
  { title: 'Guruji5', uri: require('../../assets/SantImage/image5.jpg') },
  { title: 'Guruji6', uri: require('../../assets/SantImage/image1.jpg') },
  { title: 'Guruji7', uri: require('../../assets/SantImage/image2.jpg') },
  { title: 'Guruji8', uri: require('../../assets/SantImage/image3.jpg') },
  { title: 'Guruji9', uri: require('../../assets/SantImage/image4.jpg') },
  { title: 'Guruji10', uri: require('../../assets/SantImage/image5.jpg') },
  { title: 'Guruji1', uri: require('../../assets/SantImage/image1.jpg') },
  { title: 'Guruji2', uri: require('../../assets/SantImage/image2.jpg') },
  { title: 'Guruji3', uri: require('../../assets/SantImage/image3.jpg') },
  { title: 'Guruji4', uri: require('../../assets/SantImage/image4.jpg') },
  { title: 'Guruji5', uri: require('../../assets/SantImage/image5.jpg') },
  { title: 'Guruji6', uri: require('../../assets/SantImage/image1.jpg') },
  { title: 'Guruji7', uri: require('../../assets/SantImage/image2.jpg') },
  { title: 'Guruji8', uri: require('../../assets/SantImage/image3.jpg') },
  { title: 'Guruji9', uri: require('../../assets/SantImage/image4.jpg') },
  { title: 'Guruji10', uri: require('../../assets/SantImage/image5.jpg') },
  { title: 'Guruji1', uri: require('../../assets/SantImage/image1.jpg') },
  { title: 'Guruji2', uri: require('../../assets/SantImage/image2.jpg') },
  { title: 'Guruji3', uri: require('../../assets/SantImage/image3.jpg') },
  { title: 'Guruji4', uri: require('../../assets/SantImage/image4.jpg') },
  { title: 'Guruji5', uri: require('../../assets/SantImage/image5.jpg') },
  { title: 'Guruji6', uri: require('../../assets/SantImage/image1.jpg') },
  { title: 'Guruji7', uri: require('../../assets/SantImage/image2.jpg') },
  { title: 'Guruji8', uri: require('../../assets/SantImage/image3.jpg') },
  { title: 'Guruji9', uri: require('../../assets/SantImage/image4.jpg') },
  { title: 'Guruji10', uri: require('../../assets/SantImage/image5.jpg') },
  { title: 'Guruji1', uri: require('../../assets/SantImage/image1.jpg') },
  { title: 'Guruji2', uri: require('../../assets/SantImage/image2.jpg') },
  { title: 'Guruji3', uri: require('../../assets/SantImage/image3.jpg') },
  { title: 'Guruji4', uri: require('../../assets/SantImage/image4.jpg') },
  { title: 'Guruji5', uri: require('../../assets/SantImage/image5.jpg') },
  { title: 'Guruji6', uri: require('../../assets/SantImage/image1.jpg') },
  { title: 'Guruji7', uri: require('../../assets/SantImage/image2.jpg') },
  { title: 'Guruji8', uri: require('../../assets/SantImage/image3.jpg') },
  { title: 'Guruji9', uri: require('../../assets/SantImage/image4.jpg') },
  { title: 'Guruji10', uri: require('../../assets/SantImage/image5.jpg') },
];

const ImageListScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  
  const handleImagePress = (image) => {
    setSelectedImage(image);
    setModalVisible(true);
    Speech.speak(image.title, {
      language: 'gu-IN',
      rate: 0.5,
      pitch: 1,
    });
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedImage(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Sant Mandal Kundal</Text>
      <ScrollView contentContainerStyle={styles.gallery}>
        {images.map((image, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleImagePress(image)}
            style={styles.imageWrapper}
          >
            <Text style={styles.imageNumber}>{index + 1}</Text>
            <Image source={image.uri} style={styles.image} />
          </TouchableOpacity>
        ))}
      </ScrollView>

      {selectedImage && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>{selectedImage.title}</Text>
            <Image source={selectedImage.uri} style={styles.modalImage} resizeMode="contain" />
            <Button title="Close" onPress={closeModal} />
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 30,
    color: '#e22a7f',
    borderRadius: 30,
    borderWidth: 3,
    borderColor: '#e22a7f',
    padding: 10,
  },
  gallery: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  imageWrapper: {
    width: Dimensions.get('window').width / 5 - 10,
    marginBottom: 20,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 80,
    borderRadius: 8,
  },
  imageNumber: {
    top: 5,
    color: '#e22a7f',
    padding: 5,
    fontSize: 20,
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    padding: 20,
  },
  modalImage: {
    width: '100%',
    height: 300,
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 25,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default ImageListScreen;
