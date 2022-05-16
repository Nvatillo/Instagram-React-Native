import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import React from "react";
import { USERS } from "../../data/users";

const Stories = () => {
  return (
    <View style={{ marginBottom: 13 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map((story, index) => {
          return <View key={index} style={{alignItems:'center'}}>
                    <Image source={{ uri: story.image }} style={style.story} />
                    <Text style={{ color: "black" }}>
                      {story.user.length > 10
                        ? story.user.slice(0, 10).toLowerCase() + "...."
                        : story.user.toLowerCase()}
                    </Text>
                  </View>;
        })}
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  story: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 3,
    borderColor: "#FF0ECC",
  },
});

export default Stories;
