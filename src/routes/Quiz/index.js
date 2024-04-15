import * as React from 'react';
import { StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Swiper from 'react-native-swiper';
import {
  Text,
  View,
  Button,
  HR,
  Link,
  Icon,
  UUID,
  Color,
  CustomModal
} from '../../components/stb/index';
import Header from '../../components/Header/';
import Instructions from '../../components/Modals/Instructions2';
import Question from '../../components/Question';
import quizData from './data';

export default class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedback: false
    };
    this.currentIndex = 0;
    this.correct = 0;
  }

  resetState = () => {
    this.correct = 0;
    this.currentIndex = 0;
    this.setState({
      feedback: false
    });
  };
  onIndexChanged = something => {
    this.currentIndex = something;
  };
  recordAnswer = isCorrect => {
    if (isCorrect) {
      this.correct += 1;
    }
  };
  goNext = () => {
    let current = this.currentIndex;
    current += 1;
    if (current >= quizData.length - 1) {
      current = quizData.length - 1;
    }
    this.currentIndex = current;
    //this.setState({ currentIndex: current });
    this.refs.mySwiper.scrollBy(1);
  };
  doContinue = () => {
    if (this.currentIndex === quizData.length - 1) {
      this.setState({ feedback: true });
      return;
    }
    this.goNext();
  };

  renderFeedback = () => {
    return (
      <View safe>
        <View padding>
          <Text h2>Your Score:</Text>
          <View marginTop>
            <Text>{`${this.correct} out of ${quizData.length} correct`}</Text>
          </View>
          <View marginTop>
            <Text>
              Thanks for taking the quiz! Need more facts about tourniquets?
              Return to the home page to learn more.
            </Text>
          </View>
          <View marginTop>
            <Button title="Return Home" onPress={Actions.home} />
          </View>
          <View marginTop>
            <Button title="Retake Quiz" onPress={this.resetState} />
          </View>
        </View>
      </View>
    );
  };

  renderQuestions = () => {
    return quizData.map(quiz => {
      return (
        <ScrollView key={UUID.generate()} style={{ marginBottom: 50 }}>
          <View padding style={{ paddingHorizontal: 30 }}>
            <Question
              data={quiz}
              recordAnswer={this.recordAnswer}
              goNext={this.doContinue}
              answered={false}
            />
          </View>
        </ScrollView>
      );
    });
  };

  renderCore = () => {
    if (this.state.feedback) {
      return this.renderFeedback();
    }
    return (
      <View flex>
        <Header title="Quiz" />
        <Instructions />
        <View
          padding
          background={Color.secondaryColor}
          style={{ display: 'none' }}
        >
          <Text h2 color="white" center>
            Test Your Skills
          </Text>
        </View>
        <View flex>
          <Swiper
            loop={false}
            showsButtons
            onIndexChanged={this.onIndexChanged}
            ref="mySwiper"
          >
            {this.renderQuestions()}
          </Swiper>
        </View>
      </View>
    );
  };
  render() {
    return <View flex>{this.renderCore()}</View>;
  }
}
