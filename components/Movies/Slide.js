import React from "react";
import { View, Text, Dimensions } from "react-native";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import { apiImage } from "../../api";
/**
 *
 * k
 *
 * so this is the components for the slider to show in the movies page
 */
const Container = styled.View`
  height: 100%;
  width: 100%;
`;
const Content = styled.View`
  flex-direction: row;
`;
const Data = styled.View`
  width: 50%;
`;
const Title = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 18px;
`;
const Votes = styled.Text`
  color: white;
  opacity: 0.7;
`;
const Overview = styled.Text`
  color: white;
  opacity: 0.7;
`;
const BG = styled.Image`
  height: 100%;
  width: 100%;
  opacity: 0.5;
  position: absolute;
`;
export default function Slide({ id, title, backgroundImage, votes, overview }) {
  return (
    <Container>
      <BG source={{ uri: apiImage(backgroundImage) }} />
      <Content>
        <Data>
          <Title>{title}</Title>
          <Votes>{votes}/10</Votes>
          <Overview>{overview}</Overview>
        </Data>
      </Content>
    </Container>
  );
}
Slide.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string,
  votes: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
};
