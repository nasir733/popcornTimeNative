import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
const { width, height } = Dimensions.get("screen");
const Header = styled.View`
  width: 100%;
  height: ${height / 3}px;
`;
const Container = styled.View`
  flex: 1;
  background-color: black;
  justify-content: center;
`;

// const Text = styled.Text``;
const Section = styled.View`
  background-color: red;
  height: 100%;
`;
const MoviesPresenter = ({ loading, nowPlaying }) => {
  return (
    <Container>
      {loading ? (
        <ActivityIndicator color="white" size="small" />
      ) : (
        <Header>
          <Swiper controlsEnabled={false} loop timeout={3}>
            {nowPlaying.map((movie) => (
              <Section key={movie.id}>
                <Text>{movie.original_title}</Text>
              </Section>
            ))}
          </Swiper>
        </Header>
      )}
    </Container>
  );
};

export default MoviesPresenter;

const styles = StyleSheet.create({});
