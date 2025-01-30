import React, { useState, useMemo } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import TapScreen from './src/screens/TapScreen';
import ImageScreen from './src/screens/ImageScreen';
import AlarmScreen from './src/screens/AlarmScreen';
import MandalScreen from './src/screens/MandalScreen';
import { Ionicons } from '@expo/vector-icons';

const App = () => {
  const [activeScreen, setActiveScreen] = useState('Tap');

  // Using useMemo to prevent unnecessary re-renders of each screen
  const renderScreen = useMemo(() => {
    switch (activeScreen) {
      case 'Tap':
        return <TapScreen />;
      case 'Image':
        return <ImageScreen />;
      case 'Alarm':
        return <AlarmScreen />;
      case 'Santo':
        return <MandalScreen />;
      default:
        return <TapScreen />;
    }
  }, [activeScreen]);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>{renderScreen}</View>
      <View style={styles.navBar}>
        {['Tap', 'Alarm', 'Image', 'Santo'].map((screen) => {
          const iconName = screen === 'Tap' ? 'home' : screen === 'Alarm' ? 'alarm' : screen === 'Image' ? 'image' : 'people';
          return (
            <TouchableOpacity
              key={screen}
              onPress={() => setActiveScreen(screen)}
              style={styles.navButton}
            >
              <Ionicons
                name={iconName}
                size={30}
                color={activeScreen === screen ? '#e22a7f' : 'black'}
              />
              <Text style={{ color: activeScreen === screen ? '#e22a7f' : 'black' }}>
                {screen === 'Tap' ? 'Jap Jap' : screen === 'Alarm' ? 'Dhun' : screen === 'Image' ? 'Charnavind' : 'Santo'}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 3,
    backgroundColor: '#f1f1f1',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderWidth: 3,
    borderColor: '#e22a7f',
    shadowColor: '#f1f1f1',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  navButton: {
    flex: 1,
    alignItems: 'center',
    padding: 5,
  },
  iconContainer: {
    alignItems: 'center',
  },
  iconLabel: {
    fontSize: 12,
    marginTop: 0,
  },
});

export default App;
