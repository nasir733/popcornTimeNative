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
import Slide from "../../components/Movies/Slide";
const { width: WIDTH, height: HEIGHT } = Dimensions.get("screen");

const Container = styled.View`
  flex: 1;
  background-color: black;
  justify-content: center;
`;
const SlideContainer = styled.View`
  width: ${WIDTH}px;
  height: ${HEIGHT / 4}px;
`;

// const Text = styled.Text``;

const MoviesPresenter = ({ loading, nowPlaying }) => {
  return (
    <Container>
      {loading ? (
        <ActivityIndicator color="white" size="small" />
      ) : (
        <SlideContainer>
          <Swiper controlsEnabled={false} loop timeout={3}>
            {nowPlaying.map((movie) => (
              <Slide
                key={movie.id}
                id={movie.id}
                title={movie.original_title}
                overview={movie.overview}
                votes={movie.vote_average}
                backgroundImage={movie.backdrop_path}
              />
            ))}
          </Swiper>
        </SlideContainer>
      )}
    </Container>
  );
};

export default MoviesPresenter;

const styles = StyleSheet.create({});
