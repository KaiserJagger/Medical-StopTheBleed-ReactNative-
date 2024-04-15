import * as React from 'react';
import { StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import HTMLView from 'react-native-htmlview';
import { Text, View, Button, HR, Link } from './stb/index';
import CorrectImage from '../assets/images/correct.png';
import IncorrectImage from '../assets/images/incorrect.png';

function renderNode(node, index, siblings, parent, defaultRenderer) {
  if (node.name == 'p') {
    const specialSyle = node.attribs.style;
    return <Text key={index}>{defaultRenderer(node.children, parent)}</Text>;
  } else if (node.name == 'a') {
    const specialSyle = node.attribs.style;
    return (
      <Link link={node.attribs.href} key={index}>
        {defaultRenderer(node.children, parent)}
      </Link>
    );
  }
}

export default class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answered: false,
      images: {
        question1: require('../assets/images/quizzes/1.jpg'),
        question2: require('../assets/images/quizzes/2.jpg'),
        question3: require('../assets/images/quizzes/3.jpg'),
        question4: require('../assets/images/quizzes/4.jpg'),
        question5: require('../assets/images/quizzes/5.jpg'),
        question6: require('../assets/images/quizzes/6.jpg'),
        question7: require('../assets/images/quizzes/7.jpg'),
        question8: require('../assets/images/quizzes/8.jpg'),
        question9: require('../assets/images/quizzes/9.jpg'),
        question10: require('../assets/images/quizzes/10.jpg')
      }
    };
  }
  componentWillReceiveProps = nextProps => {
    this.setState({ answered: false });
  };
  answerQuestion = answer => {
    this.setState({ answered: true, response: answer });
    let isCorrect = answer === this.props.data.answer;
    this.props.recordAnswer(isCorrect);
  };

  doContinue = () => {
    //this.setState({ answered: false });
    this.props.goNext();
  };
  renderFeedback = () => {
    if (this.state.answered) {
      let isCorrect = this.state.response === this.props.data.answer;
      let title = isCorrect ? 'Correct' : 'Incorrect';
      let image = isCorrect ? CorrectImage : IncorrectImage;
      return (
        <View marginTop row hCenter>
          <View vCenter>
            <Text h3>{title}</Text>
          </View>
          <View paddingLeft>
            <Image source={image} />
          </View>
        </View>
      );
    }
    return <View />;
  };
  renderButtons = () => {
    if (!this.state.answered) {
      return (
        <View row hCenter marginTop>
          <View flex marginLeft marginRight>
            <Button
              title="Fact"
              onPress={() => {
                this.answerQuestion('Fact');
              }}
            />
          </View>
          <View flex marginRight marginLeft>
            <Button
              title="Fiction"
              onPress={() => {
                this.answerQuestion('Fiction');
              }}
            />
          </View>
        </View>
      );
    }
    return <View />;
  };

  renderContinueButton = () => {
    if (this.state.answered) {
      return (
        <View marginBottom flex>
          <Button title="Continue" onPress={this.doContinue} />
        </View>
      );
    }
    return <View />;
  };
  renderContent = () => {
    let data = this.props.data;
    let imageTag = data.heroImage;
    let question = data.question;
    let feedback = data.feedback;
    let text = question;
    if (this.state.answered) {
      text = feedback;
    }
    return (
      <View>
        <Image
          source={this.state.images[imageTag]}
          style={{ resizeMode: 'contain', height: 200, width: '100%' }}
        />
        {this.renderFeedback()}
        <View marginTop>
          <HTMLView value={text} renderNode={renderNode} />
        </View>
      </View>
    );
  };
  renderCore = () => {
    return (
      <View flex>
        {this.renderContinueButton()}
        {this.renderContent()}
        {this.renderButtons()}
      </View>
    );
  };
  render() {
    return <View>{this.renderCore()}</View>;
  }
}
