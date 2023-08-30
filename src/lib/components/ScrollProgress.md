# Scroll Progress

1. Import the component from the file where it is defined: `import ScrollProgress from '@/assets/Colors';`
2. Import the data for the images from the images file: `import images from '@/assets/Images';`
3. Import the image component from the image file: `import Image from '@/assets/Image';`
4. Create a state variable to store the current index of the flat list: `const [currentIndex, setCurrentIndex] = useState(0);`
5. Create a ref variable to store the animated value of the scroll position: `const scrollX = useRef(new Animated.Value(0)).current;`
6. Create a ref variable to store the reference to the flat list: `const slidesRef = useRef(null);`
7. Create a callback function to update the current index when the viewable items change: `const viewableItemsChanged = useRef(({viewableItems}: any) => {setCurrentIndex(viewableItems[0].index);}).current;`
8. Create a config object to define the viewability criteria: `const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;`
9. Render the component inside a view container with the following props:
    - `data`: The array of image objects with `id` and `source` properties.
    - `scrollX`: The animated value of the scroll position.
10. Render a flat list inside the component with the following props:
    - `data`: The same array of image objects as above.
    - `renderItem`: A function that returns an image component with an item prop.
    - `horizontal`: A boolean value that indicates whether the list should be horizontal or vertical.
    - `showsHorizontalScrollIndicator`: A boolean value that indicates whether the horizontal scroll indicator should be visible or not.
    - `pagingEnabled`: A boolean value that indicates whether the scrolling should snap to page boundaries or not.
    - `bounces`: A boolean value that indicates whether the scrolling should bounce at the end or not.
    - `keyExtractor`: A function that returns a unique key for each item in the list.
    - `onScroll`: An event handler that updates the animated value of the scroll position using `Animated.event`.
    - `scrollEventThrottle`: A number that specifies how often the scroll event will be fired in milliseconds.
    - `onViewableItemsChanged`: An event handler that updates the current index using the callback function defined above.
    - `viewabilityConfig`: An object that specifies the viewability criteria using the config object defined above.
    - `ref`: A reference to the flat list using the ref variable defined above.

```jsx
// Import the component and other dependencies
import ScrollProgress from '@/assets/Colors';
import images from '@/assets/Images';
import Image from '@/assets/Image';
import React, {useState, useRef} from 'react';
import {View, FlatList, Animated, useWindowDimensions} from 'react-native';

// Define the main component that renders the images with the scroll progress indicator
const ImageSlider = () => {
  // Create state and ref variables
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  // Define the callback function and the config object for viewability
  const viewableItemsChanged = useRef(({viewableItems}: any) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  // Return the JSX element
  return (
    <View style={styles.container}>
      <ScrollProgress data={images} scrollX={scrollX} />
      <FlatList
        data={images}
        renderItem={({item}) => <Image item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        keyExtractor={item => item.id.toString()}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        scrollEventThrottle={32}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
      />
    </View>
  );
};

// Export the main component
export default ImageSlider;
```
